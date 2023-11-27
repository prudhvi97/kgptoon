#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> computeLPS(string s) {
    int n = s.length();
    vector<vector<int>> dp(n, vector<int>(n, 0));

    for (int i = 0; i < n; i++)
        dp[i][i] = 1;

    for (int cl = 2; cl <= n; cl++) {
        for (int i = 0; i < n - cl + 1; i++) {
            int j = i + cl - 1;
            if (s[i] == s[j] && cl == 2)
                dp[i][j] = 2;
            else if (s[i] == s[j])
                dp[i][j] = dp[i + 1][j - 1] + 2;
            else
                dp[i][j] = max(dp[i][j - 1], dp[i + 1][j]);
        }
    }

    return dp;
}

pair<int, int> maxNonOverlappingPalindromes(string s) {
    int n = s.length();
    auto lps = computeLPS(s);
    pair<int, int> result = {0, 0};

    for (int i = 0; i < n - 1; i++) {
        int leftLPS = lps[0][i];
        int rightLPS = lps[i + 1][n - 1];

        if (leftLPS > result.first || rightLPS > result.second) {
            result = max(result, make_pair(leftLPS, rightLPS));
        }
    }

    return result;
}

int main() {
    string S = "eeegeeksforskeeggeeks";
    auto result = maxNonOverlappingPalindromes(S);
    cout << "Lengths of two non-overlapping palindromic subsequences are: " 
         << result.first << " and " << result.second << endl;
    return 0;
}
