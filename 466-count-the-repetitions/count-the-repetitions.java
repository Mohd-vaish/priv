class Solution {
    public int getMaxRepetitions(String s1, int n1, String s2, int n2) {

        int m = s1.length();
        int n = s2.length();

        int[][] dp = new int[n][2];

        for (int i = 0; i < n; i++) {
            int j = i;
            int count = 0;

            for (int k = 0; k < m; k++) {
                if (s1.charAt(k) == s2.charAt(j)) {
                    j++;

                    if (j == n) {
                        count++;
                        j = 0;
                    }
                }
            }

            dp[i][0] = count;
            dp[i][1] = j;
        }

        int totalMatches = 0;
        int j = 0;

        for (int i = 0; i < n1; i++) {
            totalMatches += dp[j][0];
            j = dp[j][1];
        }

        return totalMatches / n2;
    }
}