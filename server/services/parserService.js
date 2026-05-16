import pdf from 'pdf-parse';

export class ParserService {
    static async parsePDF(buffer) {
        console.log('Parser Service: Extracting text from PDF...');
        try {
            const data = await pdf(buffer);
            return data.text;
        } catch (error) {
            console.error('PDF Parse Error:', error);
            throw new Error('Failed to parse PDF');
        }
    }
}
