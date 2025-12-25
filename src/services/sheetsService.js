/**
 * Google Sheets Service
 * Fetches data from Google Sheets using the published CSV endpoint
 */

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID || '';

// Helper function to parse CSV text
const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));

    const data = [];
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;

        const values = [];
        let current = '';
        let inQuotes = false;

        for (let char of lines[i]) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim().replace(/^"|"$/g, ''));
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim().replace(/^"|"$/g, ''));

        if (values.length === headers.length) {
            const row = {};
            headers.forEach((header, index) => {
                row[header] = values[index];
            });
            data.push(row);
        }
    }

    return data;
};

// Helper function to parse resources string
const parseResources = (resourcesStr) => {
    if (!resourcesStr || resourcesStr.trim() === '') return [];

    return resourcesStr.split('|').map(resource => {
        const [text, link] = resource.split(':').map(s => s.trim());
        return { text, link: link || '#' };
    });
};

// Fetch data from a specific sheet
const fetchSheetData = async (sheetName) => {
    if (!SHEET_ID) {
        console.warn('Google Sheets ID not configured. Using fallback data.');
        return null;
    }

    try {
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch sheet: ${sheetName}`);
        }

        const csvText = await response.text();
        return parseCSV(csvText);
    } catch (error) {
        console.error(`Error fetching ${sheetName}:`, error);
        return null;
    }
};

// Fetch Updates data
export const fetchUpdates = async () => {
    const data = await fetchSheetData('Updates');
    if (!data) return null;

    return data.map(row => ({
        title: row.title || '',
        subtitle: row.subtitle || '',
        description: row.description || '',
        imageUrl: row.imageUrl || '',
        resources: parseResources(row.resources || ''),
    }));
};

// Fetch Events data
export const fetchEvents = async () => {
    const data = await fetchSheetData('Events');
    if (!data) return null;

    console.log('Fetched Events from Google Sheets:', data.length, 'events');

    const transformedData = data.map(row => ({
        title: row.title || '',
        subtitle: row.subtitle || '',
        description: row.description || '',
        imageUrl: row.imageUrl || '',
        resources: parseResources(row.resources || ''),
    }));

    console.log('Transformed Events:', transformedData);
    return transformedData;
};

// Fetch Event Slideshow images
export const fetchEventSlideshow = async () => {
    const data = await fetchSheetData('EventSlideshow');
    if (!data) return null;

    return data.map(row => row.imageUrl).filter(url => url && url.trim() !== '');
};

// Fetch Academics data
export const fetchAcademics = async () => {
    const data = await fetchSheetData('Academics');
    if (!data) return null;

    // Transform flat data into nested structure
    const academics = {};

    data.forEach(row => {
        const { year, semester, courseName, resources } = row;

        if (!academics[year]) {
            academics[year] = {};
        }

        if (!academics[year][semester]) {
            academics[year][semester] = {};
        }

        const parsedResources = parseResources(resources || '');
        const courseResources = {};

        parsedResources.forEach(({ text, link }) => {
            if (!courseResources[text]) {
                courseResources[text] = [];
            }
            courseResources[text].push(link);
        });

        academics[year][semester][courseName] = courseResources;
    });

    return academics;
};

// Service object with all fetch methods
const SheetsService = {
    fetchUpdates,
    fetchEvents,
    fetchEventSlideshow,
    fetchAcademics,
};

export default SheetsService;
