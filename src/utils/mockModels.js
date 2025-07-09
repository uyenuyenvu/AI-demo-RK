export const mockModels = [
  {
    id: '1',
    name: 'Image Classifier',
    description: 'A model for classifying images into categories.',
    version: '1.0.0',
    status: 'active',
    createdAt: '2024-06-01T10:00:00Z',
    tags: ['image', 'classification', 'cnn'],
  },
  {
    id: '2',
    name: 'Text Sentiment Analyzer',
    description: 'Analyzes sentiment of text data.',
    version: '2.1.0',
    status: 'inactive',
    createdAt: '2024-05-15T14:30:00Z',
    tags: ['text', 'nlp', 'sentiment'],
  },
  {
    id: '3',
    name: 'Object Detection',
    description: 'Detects objects in images and videos.',
    version: '1.2.3',
    status: 'active',
    createdAt: '2024-04-20T09:15:00Z',
    tags: ['image', 'detection', 'yolo'],
  },
];

export function getAllModels() {
  return Promise.resolve(mockModels);
}

export function getModelById(id) {
  return Promise.resolve(mockModels.find((m) => m.id === id));
}
