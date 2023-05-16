# DOCUMENTATIE PROIECT
## *=EventSnap=* 

### Link prezentare proiect: [https://www.youtube.com/watch?v=I1-xRTNyv2Q](https://www.youtube.com/watch?v=I1-xRTNyv2Q)
### Link publicare proiect: [https://cloud-computing-next-two.vercel.app/](https://cloud-computing-next-two.vercel.app/)

### Enache Madalina - Daniela
### Grupa 1119 SIMPRE

## Introducere
### Cloud computing reprezintă o paradigmă revoluționară în domeniul IT, oferind acces la resurse de calcul și stocare prin intermediul internetului. Înlocuind infrastructura fizică tradițională, cloud-ul permite utilizatorilor să acceseze și să utilizeze servicii scalabile, flexibile și rentabile. Această tehnologie inovatoare oferă avantaje precum accesibilitate globală, scalabilitate instantanee, economii de costuri și securitate avansată. 
### Prin modelele sale de servicii, cum ar fi IaaS, PaaS și SaaS, cloud computing oferă opțiuni personalizate pentru nevoile de infrastructură și aplicații ale utilizatorilor. Astfel, companiile și utilizatorii individuali pot beneficia de un mediu de lucru eficient și virtual, fără a fi nevoie să gestioneze și să întrețină propriile infrastructuri. 
### Cloud computing este o forță disruptivă care continuă să transforme modul în care organizațiile și persoanele accesează și utilizează tehnologia, aducând flexibilitate și inovație în lumea digitală de astăzi.
### Deoarece am observat ca suntem din ce in ce mai ocupati, m-am gandit sa creez un site tip agenda unde ne putem trece toate evenimentele/planurile noastre. Folosind serviciile in cloud, am creat o agenta „on the go”. Aplicatia web permite utilizatorului sa isi vizioneze evenimentele create, poate sterge evenimenetele listate si poate crea evenimente noi.

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture1.png "Picture1")
###### *Pagina principala EventSnap*

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture2.png "Picture2")
###### *Pagina de inserare a unui eveniment nou*

## Descriere problema
### Prin site-ul EventSnap am ales sa folosesc 2 servicii de cloud pentru a facilita fluxul de date si pentru a fi accesat si utilizat de oricine oriunde.
### Site-ul este conectat la o baza de date non-SQL, MongoDB, pentru usurinta utilizarii. MongoDB este un sistem de gestionare a bazelor de date orientat pe documente, non-relațional și open-source. Acesta stochează date în format JSON-like, numite documente, care pot fi flexibile și ierarhice. 
### MongoDB poate fi utilizat în cadrul unui mediu de cloud computing pentru a beneficia de avantajele scalabilității, flexibilității și disponibilității oferite de infrastructura cloud, cum ar fi MongoDB Atlas, care oferă un serviciu gestionat de baze de date MongoDB în cloud. Aceste servicii facilitează implementarea și gestionarea clusterelor MongoDB într-un mediu de cloud computing, gestionând aspecte precum scalabilitatea, securitatea și backup-urile automate.
### Pentru conectarea la baza de date, am creat in cadrul proiectului un folder lib, in care se afla fisierul mongodb.js, ca in captura de mai jos:

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture3.png "Picture3")

### Aplicatia in sine este dezvoltata cu ajutorul limbajului JavaScript. In cadrul proiectului m-am ajutat de framework-ul Next.js, un cadru (framework) de dezvoltare web open-source, bazat pe limbajul JavaScript și pe platforma Node.js. A fost creat pentru a construi aplicații web și site-uri web performante, scalabile și ușor de întreținut.
### La final, aplicatia a fost deplasata pe platforma Vercel, acesta fiind un furnizor de servicii de cloud computing și deplasare a aplicațiilor web, cunoscut pentru abordarea sa inovatoare și tehnologiile avansate utilizate în domeniul dezvoltării web. În cadrul proiectului nostru, am ales Vercel ca soluție pentru a beneficia de scalabilitate, performanță și ușurința în gestionarea aplicațiilor web.
### Prin alegerea Vercel ca furnizor de cloud computing, am obținut o serie de beneficii semnificative. În primul rând, Vercel oferă o scalabilitate remarcabilă, permițând site-ului nostru să facă față la orice creștere a traficului fără probleme. În plus, infrastructura globală a Vercel asigură încărcarea rapidă a paginilor, contribuind la o experiență plăcută și eficientă a utilizatorilor.
### De asemenea, Vercel dispune de funcționalități avansate, cum ar fi serverless functions, care ne-au permis să implementăm logică de backend fără a gestiona infrastructura subiacentă. Aceasta a adus un nivel ridicat de flexibilitate și eficiență în dezvoltarea aplicației noastre.

## Descriere API
### API (Application Programming Interface) reprezintă un set de reguli și protocoale care permit aplicațiilor să comunice și să interacționeze între ele. Este un intermediar software care permite schimbul de date și funcționalități între diferite aplicații, servicii sau componente de software.
### Un API definește metodele și structurile de date care pot fi utilizate pentru a accesa și utiliza funcționalitățile oferite de o anumită aplicație sau serviciu. Aceasta poate fi o interfață între două componente software, cum ar fi între un sistem de operare și aplicațiile care rulează pe el sau între serverul unei aplicații web și clienții care interacționează cu aceasta.
### Avantajul de a implementa aplicatia in framework-ul Next este aceea ca integreaza intr-un mod simplu cu API-uri externe prin intermediul funcționalităților sale de gestionare a cererilor HTTP. Putem utiliza biblioteci precum Axios sau fetch pentru a efectua cereri către API-uri și pentru a manipula răspunsurile primite. Aceasta face procesul de comunicare cu API-urile externe mult mai ușor și mai eficient.
### In folderul pages din cadrul proiectului se afla pagini precum index.js, insert.jsx, in care se afla cod HTML, in spate creandu-se rute catre paginile site-ului web.

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture4.png "Picture4")

### Rutarea in Backend, folosind API se realizeaza prin crearea endpoint-urilor care se conecteaza pe internet, la baza de date si asculta apeluri. In folderul /pages/api/records.js se gasesc respectivele endpoint-uri:

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture5.png "Picture5")

## Flux de date
### Exemple de request/response:
### Cerere GET pentru obținerea unei liste de inregistrari:

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture6.png "Picture6")

### Cerere POST pentru inserarea unei inregistrari in lista de evenimente:

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture7.png "Picture7")

### Cerere PUT pentru modificarea unei inregistrari din lista de evenimente:

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture8.png "Picture8")

### Cerere DELETE pentru stergerea unei inregistrari din lista de evenimente:

![alt text](https://github.com/madenaa/CloudComputing-next/blob/main/images/Picture9.png "Picture9")
