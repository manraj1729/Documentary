
class Solution
{
  public:
    //Function to find the minimum indexed character.
    int minIndexChar(string str, string patt)
    {
        set<char> s ;
        for(int i=0;i<patt.size();i++)
        {
            s.insert(patt[i]) ;
        }
        for(int i=0;i<str.size();i++)
        {
            if(s.find(str[i])!=s.end())
            {
                return i ;
            }
        }
        return -1 ;
    }
    
};
