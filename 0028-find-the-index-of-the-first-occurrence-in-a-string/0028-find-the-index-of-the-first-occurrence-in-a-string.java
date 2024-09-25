class Solution {
    public int strStr(String haystack, String needle) {

        // If needle is empty, return 0 as per problem constraints.
        if (needle.length() == 0) {
            return 0;
        }

        // Loop through haystack to find the first occurrence of needle
        for (int i = 0; i <= haystack.length() - needle.length(); i++) {
            // Check if the substring from i to i+needle.length() equals needle
            if (haystack.substring(i, i + needle.length()).equals(needle)) {
                return i;
            }
        }

        // If needle is not found, return -1
        return -1;
    }


        
    }
