using System;

namespace enume
{
    class Program
    {
        #region Créer une énumération pour les couleurs (Coeur, Carreau, Pique, Trefle)
    /*
        public enum couleur {coeur = 1 , carreau = 2 , pique = 3 , trefle = 4}
    */
        #endregion
        
        
        #region Créer une énumération pour les valeurs (as = 14, deux = 2, trois = 3, ..., Roi = 13

        //public enum carte {un = 14, deux = 2, trois = 3, quatre = 4 , cinq = 5, six = 6, sept = 7, huit = 8 , neuf = 9 , dix = 10, valet = 11, dame = 12, roi = 13 }


        #endregion


        #region Créer une structure Carte qui contient deux variables publiques 
        
        public struct carte
        {
            public enum carteValeur 
            {
               un = 14, deux = 2, trois = 3, quatre = 4 , cinq = 5, six = 6, sept = 7, huit = 8 , neuf = 9 , dix = 10, valet = 11, dame = 12, roi = 13 
            }

            public enum couleur
            {
                coeur = 1 , carreau = 2 , pique = 3 , trefle = 4
            } 
            
        }

        #endregion

        static void Main(string[] args)
        {
        
        #region Créer une énumération pour les couleurs (Coeur, Carreau, Pique, Trefle)
    /* 
        couleur carteCoeur = couleur.coeur;
        couleur carteCarreau = couleur.carreau;
        couleur cartePique = couleur.pique;
        couleur carteTrefle = couleur.trefle;
        
        System.Console.WriteLine(carteCoeur);
        System.Console.WriteLine(carteCarreau);
        System.Console.WriteLine(cartePique);
        System.Console.WriteLine(carteTrefle);
    */
        #endregion


        #region Créer une énumération pour les valeurs (as = 14, deux = 2, trois = 3, ..., Roi = 13
    /*        
        carte valet = carte.valet;

        System.Console.WriteLine((int)valet);
    */
        #endregion
    

        #region Créer une structure Carte qui contient deux variables publiques 
        
        carte test;
        
       
        #endregion
        }
            
            
    }
}
