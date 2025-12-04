export interface HealthTopic {
    Type: string;
    Id: string;
    Title: string;
    ParentId: string;
    TranslationId: string;
}

export interface HealthApiResponse {
    Result: {
        Error: string;
        Total: number;
        Items: {
            Item: HealthTopic[];
        };
    };
}

const API_BASE_URL = '/api/myhealthfinder/api/v4';

export const fetchHealthTopics = async (): Promise<HealthTopic[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/itemlist.json?lang=en`);
        if (!response.ok) {
            throw new Error('Failed to fetch health topics');
        }
        const data: HealthApiResponse = await response.json();
        return data.Result.Items.Item;
    } catch (error) {
        return [];
    }
};
