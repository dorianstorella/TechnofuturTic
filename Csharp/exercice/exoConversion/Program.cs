using System;

namespace exoConversion
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Demander à l’utilisateur d’encoder 2 nombres (int) et d’en faire l’addition, la conversion devra utiliser la méthode  int.Parse()  
        /*
            Console.WriteLine("donne un nombre");
            int nbr1 = int.Parse(Console.ReadLine());
            Console.WriteLine("donne un deuxieme nombre");
            int nbr2 = int.Parse(Console.ReadLine());
            System.Console.WriteLine(nbr1+nbr2);
        */
            #endregion 

            #region Demander à l’utilisateur d’encoder 2 nombres (int) et d’en faire l’addition, la conversion devra utiliser la méthode  int.TryParse() 
        /*    
            int nbr1;
            int nbr2;
            Console.WriteLine("donne un nombre");
            int.TryParse(Console.ReadLine(),out nbr1);
            Console.WriteLine("donne un deuxieme nombre");
            int.TryParse(Console.ReadLine(),out nbr2);

            System.Console.WriteLine(nbr1+nbr2);
        */    
            #endregion
        }
    }
}
