
int maximumSum( int n,int m, vector<vector<int>> &a) {
    
    int ans=0 ;
    int mx=0 ;
    for(int j=0;j<m;j++)
    {
        mx = max(a[n-1][j],mx) ;
    }
    
    if(n==1)
    {
        return mx ;
    }
    else
    {
    ans+=mx ;
    for(int i=n-2;i>-1;i--)
    {
        int fl=0 ;
        int diff=1e+9 ;
        int sl=0 ; 
        for(int j=0;j<m;j++)
        {
            if(a[i][j]<mx)
            {
                fl=1 ;
                
                
                
                if(mx-a[i][j]<diff)
                {
                    sl = a[i][j] ;
                    diff = mx-a[i][j];
                }
                
                
            }
        }
        ans+=sl ;
        mx = sl ;
        if(fl==0)
        return 0 ;
    }
        
    }
    
    return ans ;
    
    
    
}
