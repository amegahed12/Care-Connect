import React, { useEffect, useState } from 'react';
import { fetchHealthTopics, type HealthTopic } from '../../services/healthService';
import { BookOpen, ExternalLink } from 'lucide-react';

const HealthResources: React.FC = () => {
    const [topics, setTopics] = useState<HealthTopic[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTopics = async () => {
            try {
                const data = await fetchHealthTopics();
                // Filter to show only Topics (not Categories) and limit to 6
                const topics = data.filter(item => item.Type === 'Topic');
                setTopics(topics.slice(0, 6));
            } catch (error) {
                console.error('Failed to load health topics', error);
            } finally {
                setLoading(false);
            }
        };

        loadTopics();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Health Resources
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Stay informed with the latest health topics and tips.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topics.map((topic) => (
                        <div
                            key={topic.Id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            <div className="p-6 flex-1">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                                        {topic.Title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Learn more about {topic.Title} and how to maintain a healthy lifestyle.
                                </p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                <a
                                    href={`https://health.gov/myhealthfinder?topicId=${topic.Id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                                >
                                    Read More <ExternalLink className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HealthResources;
