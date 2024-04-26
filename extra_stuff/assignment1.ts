interface SessionDetails {
    userId: string;
    deviceId: string;
    sessionStart: Date;
    sessionEnd: Date | null;
    lastInteraction: Date;
}

const sessions: SessionDetails[] = [
    // Example data should be inserted here.
];

/**
 * Computes statistics for user engagement within a specific month.
 * @param sessions Array of session details.
 * @param targetYear Year to analyze.
 * @param targetMonth Month to analyze (1-12).
 * @returns An object containing the count of unique users who logged in and were active.
 */
function analyzeMonthlyEngagement(sessions: SessionDetails[], targetYear: number, targetMonth: number): { totalLoggedIn: number, totalActive: number } {
    // Define the beginning and end of the month
    const startOfMonth = new Date(targetYear, targetMonth - 1, 1);
    const endOfMonth = new Date(targetYear, targetMonth, 0, 23, 59, 59);

    // Use sets to ensure each user is counted only once
    const usersLoggedIn = new Set < string > ();
    const usersActive = new Set < string > ();

    // Process each session to determine the relevant counts
    sessions.forEach(session => {
        // Extract year and month from the session start date
        const monthOfSession = session.sessionStart.getMonth() + 1;
        const yearOfSession = session.sessionStart.getFullYear();

        // Count user as logged in if the session start is within the target month and year
        if (yearOfSession === targetYear && monthOfSession === targetMonth) {
            usersLoggedIn.add(session.userId);
        }

        // Count user as active if last interaction is within the month and after the session started
        if (session.lastInteraction >= startOfMonth && session.lastInteraction <= endOfMonth &&
            session.lastInteraction >= session.sessionStart &&
            (session.sessionEnd === null || session.lastInteraction <= session.sessionEnd)) {
            usersActive.add(session.userId);
        }
    });

    // Return counts of logged-in and active users
    return {
        totalLoggedIn: usersLoggedIn.size,
        totalActive: usersActive.size
    };
}
