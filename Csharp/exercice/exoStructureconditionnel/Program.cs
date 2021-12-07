using System;

namespace exoStructureconditionnel
{
    class Program
    {
        static void Main(string[] args)
        {   
            #region  Demander à l’utilisateur d’encoder 1 nombre (int), si la somme des deux moitiés de celui-ci donne le nombre, afficher « le nombre est paire » sinon « le nombre est impaire 
            
            Console.WriteLine("donne un nombre");
            int nbr1 = int.Parse (Console.ReadLine());
            
            if (nbr1 / 2 + nbr1/2 == nbr1 ) {
                System.Console.WriteLine("nbr pair");
            } else {
                System.Console.WriteLine("nbr impair");
            }

            #endregion
        }
    }
}
