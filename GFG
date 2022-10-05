//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;


// } Driver Code Ends
//User function template for C++
class Solution{
public:	
	// Function to check if array has 2 elements
	// whose sum is equal to the given value
	bool hasArrayTwoCandidates(int arr[], int n, int x) {
	    unordered_map<int,int> m ;
	    
	    for(int i=0;i<n;i++)
	    {
	        m[arr[i]]++ ;
	    }
	    
	    for(int i=0;i<n;i++)
	    {
	        int a = x - arr[i]  ;
	        if(a==arr[i])
	        {
	        if(m[a]>1)
	        {
	       //cout<<arr[i]<<" " ;     
	        return true ;
	        }    
	        }
	        else
	        {
	            if(m[a]>=1)
	        {
	       //cout<<arr[i]<<" " ;     
	        return true ;
	        } 
	            
	        }
	        
	    }
	    
	    return false ;
	    
	}
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, x;
        cin >> n >> x;
        int arr[n];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        Solution ob;
        auto ans = ob.hasArrayTwoCandidates(arr, n, x);
        cout << (ans ? "Yes\n" : "No\n");
    }
    return 0;
}

// } Driver Code Ends
