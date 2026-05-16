import { AIService } from '../services/aiService.js';
import { ParserService } from '../services/parserService.js';
import { ATSService } from '../services/atsService.js';
import { JobMatchService } from '../services/jobMatchService.js';

export const analyzeResume = async (req, res, next) => {
    try {
        const { jobDescription, resumeText: providedText } = req.body;
        const resumeFile = req.file;

        let extractedText = providedText || '';

        // If file provided, parse it
        if (resumeFile) {
            // In a real implementation, we'd read the file buffer here
            // extractedText = await ParserService.parsePDF(resumeFile.path);
            extractedText = "Mock extracted text from PDF"; 
        }

        if (!extractedText) {
            return res.status(400).json({ success: false, message: 'Resume content required' });
        }

        // Orchestrate services
        const [aiAnalysis, atsValidation, jobMatch] = await Promise.all([
            AIService.processAnalysis(extractedText, jobDescription),
            ATSService.validateFormatting(extractedText),
            JobMatchService.calculateMatch(extractedText, jobDescription)
        ]);

        res.status(200).json({
            success: true,
            data: {
                ai: aiAnalysis,
                ats: atsValidation,
                match: jobMatch
            }
        });
    } catch (error) {
        console.error('Controller Error:', error);
        next(error);
    }
};
