using System;

namespace Boucle
{
    class Program
    {
        static void Main(string[] args)
        {   
            #region Calculer les 25 premiers nombres de la suite de Fibonacci
        /*
            int nb1=0, nb2=1;
            int current;

            for (int i = 0; i < 25; i++) {
            current = nb1 + nb2;
            Console.WriteLine(current);
            nb1 = nb2;
            nb2= current;
            }
        */
            #endregion

            
            #region Calculer le factoriel d’un nombre entré au clavier.
        /*    
            int x;

            do {
            Console.WriteLine("entre une nombre :");
            } while(!int.TryParse(Console.ReadLine(),out x)|| !(x>0));

            int result = x--;

            while (x>1) {
            result *= x--;
            }

            Console.WriteLine(result);
        */    
            #endregion

            
            #region  Grâce à une boucle « for », calculez les x premiers nombre premier.
        /*    
            int nb;
            
            do {
            Console.WriteLine("veuillez saisir un nombre : ");
            } 
            
            while (!int.TryParse(Console.ReadLine(), out nb)|| !(nb>0));

            for (int i = 0, value = 2; i < nb; value++) {
                bool flag = true;

                int sqrt = (int)Math.Sqrt(value);

                for (int diviseur = 2; diviseur <= sqrt && flag; diviseur++) {
                    if (value % diviseur == 0 ){
                        flag = false;
                    }
                }
           
                if (flag) {
                    Console.WriteLine(value);
                i++;
                } 
            }
        */    
            #endregion

            
            #region A l’aide de boucles « for » afficher les 5 premières tables de multiplication en allant jusque « x20 »
        /*
            for (int i = 1; i <= 5; i++) {
                for (int j = 1; j <= 20; j++) {
                    Console.WriteLine($"{j} * {i} ={j*i}");
                } 
                Console.WriteLine();
            }
        */
            #endregion


            #region À l’aide d’une boucle « for » comptez de 0, à 20,0 en augmentant de 0,1, en utilisant des doubles, et afficher la valeur à chaque itération. remarquez-vous quelque chose de particulier ?
        /*
            for (double temp = 0D; temp < 40D; temp += .1)
            {
            Console.WriteLine(temp);
            Console.WriteLine("{0:0.0}", temp);                     // nous devont mettre decimal on sinon nous auront des erreur avant la virgule
            }

            for (decimal temp = 0M; temp < 40M; temp += .1M)
            {
            Console.WriteLine(temp);
            }
        */
        /*
            decimal b = .1M;
           
            decimal result = 0M;
            for (int i = 0; i < 200; i++)
            {
                result = result + b; 
                System.Console.WriteLine(result);  
            }    
        */        
            #endregion

            #region Bonus : Calculer la racine carré d’un nombre avec maximum 10 décimales (Math.Sqrt(x) ne peut être utilisée que pour vérifier la réponse)
        
            decimal maxError = decimal.Zero;
            decimal a = 71214.28M;
            decimal startValue = a;
            decimal currentValue = a;
            decimal error = a;

            while(error > maxError)
            {
            currentValue = 0.5M * (currentValue + (a / currentValue));
            error = (startValue - currentValue) / startValue;
            startValue = currentValue;
            Console.WriteLine("pas" + error + "racine= "+currentValue);
            }
            Console.WriteLine(currentValue.ToString("N10"));    

            #endregion
        
        }
    }
}
