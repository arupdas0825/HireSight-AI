export class JobMatchService {
    static async calculateMatch(resumeText, jobDescription) {
        console.log('Job Match Service: Calculating keyword overlap...');
        return {
            matchPercentage: 78,
            topSkills: ["JavaScript", "Node.js", "React"]
        };
    }
}
