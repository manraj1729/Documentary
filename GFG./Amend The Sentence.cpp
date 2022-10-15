
class Solution{
    public:
    string amendSentence (string s)
    {
        
        int len = s.size() ;
        string ans="" ;
        int i=0 ;
        while(i<len)
        {
            ans.push_back(tolower(s[i])) ;
            i++ ;
            while((int)s[i]>96&&(int)s[i]<123)  //s[i] is lowercase 1
            {
                ans.push_back(s[i]) ;
                
                
                i++ ; 
                
                
            }
            ans.push_back(' ') ;
        }
        ans.pop_back() ;
        return ans; 
        
    }
};
