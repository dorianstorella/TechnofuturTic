using System;

namespace Operateur
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Calcule de la division entière, du modulo et de la division de deux entiers. Résultat attendu pour 5 et 2 →Division entière : 2, Modulo : 1, Division : 2,5.
        
        /*    
            int x = 5,y=2;

            Console.WriteLine($"division entier de {x} par {y} = { x / y }");
            Console.WriteLine($"modulo de {x} par {y} = { x % y }");
            Console.WriteLine($"division de {x} par {y} = {(double) x / y }");
        */
        
            #endregion
            

            #region  Vérification d’un compte bancaire BBAN, si le compte est bon affichez OK sur la console sinon KO. Le modulo des 10 premiers chiffres par 97 donne les 2 derniers. Sauf si le modulo = 0 dans ce cas les 2 derniers chiffres sont 97. (utilisez la méthode « Substring » de la classe « string »)
        
        /*
            string compte1 = "000000014245";
            string compte2 = "000000014246";
            string compte3 = "000000000097";

            String compte = compte1;

            long tenFist = long.Parse(compte.Substring(0,10));
            int lastTwo = int.Parse(compte.Substring(10,2));
            int modulo = (int)(tenFist % 97);
            Console.WriteLine(lastTwo == ((modulo==0) ? 97 : modulo)? "ok": "ko");
        */
        
            #endregion


            #region Transformer un compte bancaire BBAN Belge (xxx-xxxxxxx-xx) en IBAN (BExx-xxxx-xxxx-xxxx). Trouvez la démarche via un moteur de recherche.
           
            // B = 11, E = 14
            string CountryCode = "1114";

            //string compte1 = "001275693375";
            string compte2 = "001275693376";
            //string compte3 = "000000019497";

            string compte = compte2;

            string TempIbanAccount = compte + CountryCode + "00";

            Console.WriteLine(TempIbanAccount);
            long TenFirst = long.Parse(compte.Substring(0, 10));
            long LastTwo = long.Parse(compte.Substring(10, 2));
            Console.WriteLine(TenFirst);
            Console.WriteLine(LastTwo);
            
            if (LastTwo == ((TenFirst % 97 == 0) ? 97 : TenFirst % 97)) {
            int result = 98 - (int)(long.Parse(TempIbanAccount) % 97);
            Console.WriteLine(result);
            string ResultIBAN = ((result == 98) ? 1 : result).ToString("D2");

            string IBANAccount = "BE" + ResultIBAN + compte;

            Console.WriteLine(IBANAccount);
            } 
            else {
            Console.WriteLine("Bad Account Number");
            }

            #endregion
        }
    }
}
