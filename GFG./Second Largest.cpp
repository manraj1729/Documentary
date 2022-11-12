//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;

// } Driver Code Ends
//User function template for C++
class Solution{
public:	
	// Function returns the second
	// largest elements
	int print2largest(int arr[], int n) {
	    
	    int mx=0,mx1=0 ;
	    
	    for(int i=0;i<n;i++)
	    {
	        
	        if(arr[i]>mx)
	        {
	            mx1=mx ;
	            mx = arr[i] ;
	        }
	        
	        if(arr[i]<mx)   
	        {
	            if(mx1<arr[i])
	            {
	                mx1 = arr[i] ;
	            }
	        }
	        
	        
	    }
	    if(mx1==0)
	    return -1 ;
	    return mx1 ;
	    
	    
	    
	}
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        int arr[n];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        Solution ob;
        auto ans = ob.print2largest(arr, n);
        cout << ans << "\n";
    }
    return 0;
}

// } Driver Code Ends
