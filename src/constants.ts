import { Curriculum } from './types';

export const CURRICULUM: Curriculum = {
  9: [
    {
      id: '9-multimi',
      title: 'Mulțimi și elemente de logică matematică',
      lessons: [
        { 
          id: '9-1-1', 
          title: 'Mulțimea numerelor reale', 
          content: '# Mulțimea numerelor reale\n\nNumerele reale (R) includ numerele raționale și iraționale.\n\n### Proprietăți:\n- Comutativitate: a + b = b + a\n- Asociativitate: (a + b) + c = a + (b + c)\n- Element neutru: 0 pentru adunare, 1 pentru înmulțire.',
          problems: [
            {
              id: 'p9-1-1-1',
              question: 'Care dintre următoarele numere este irațional?',
              options: ['1/2', 'sqrt(2)', '0.75', '-5'],
              correctAnswer: 1,
              explanation: 'sqrt(2) nu poate fi scris sub formă de fracție de numere întregi, deci este irațional.'
            },
            {
              id: 'p9-1-1-2',
              question: 'Rezultatul calculului |-5| + |3| este:',
              options: ['-2', '2', '8', '-8'],
              correctAnswer: 2,
              explanation: '|-5| = 5 și |3| = 3, deci 5 + 3 = 8.'
            },
            {
              id: 'p9-1-1-3',
              question: 'Care este cel mai mic număr natural?',
              options: ['-1', '0', '1', '2'],
              correctAnswer: 1,
              explanation: 'Mulțimea numerelor naturale N începe cu 0.'
            },
            {
              id: 'p9-1-1-4',
              question: 'Numărul pi aparține mulțimii:',
              options: ['Q', 'Z', 'R fără Q', 'N'],
              correctAnswer: 2,
              explanation: 'pi este un număr irațional, deci aparține R fără Q.'
            },
            {
              id: 'p9-1-1-5',
              question: 'Care este rezultatul calculului sqrt(16) + sqrt(9)?',
              options: ['7', '5', '25', '12'],
              correctAnswer: 0,
              explanation: '4 + 3 = 7.'
            },
            {
              id: 'p9-1-1-6',
              question: 'Mulțimea numerelor întregi se notează cu:',
              options: ['N', 'R', 'Q', 'Z'],
              correctAnswer: 3,
              explanation: 'Z provine din cuvântul german "Zahlen".'
            },
            {
              id: 'p9-1-1-7',
              question: 'Inversa numărului 2/3 este:',
              options: ['-2/3', '3/2', '1', '2/3'],
              correctAnswer: 1,
              explanation: 'Inversul lui x este 1/x.'
            },
            {
              id: 'p9-1-1-8',
              question: 'Opusul numărului -7 este:',
              options: ['7', '-7', '1/7', '0'],
              correctAnswer: 0,
              explanation: 'Opusul lui a este -a.'
            },
            {
              id: 'p9-1-1-9',
              question: 'Care este valoarea lui 2^3?',
              options: ['6', '8', '9', '5'],
              correctAnswer: 1,
              explanation: '2 * 2 * 2 = 8.'
            },
            {
              id: 'p9-1-1-10',
              question: 'Numărul 0.333... (perioadă 3) este:',
              options: ['Irațional', 'Rațional', 'Întreg', 'Natural'],
              correctAnswer: 1,
              explanation: 'Orice număr zecimal periodic este rațional (1/3).'
            }
          ]
        },
        { 
          id: '9-1-2', 
          title: 'Propoziții și predicate', 
          content: '# Logică Matematică\n\nO propoziție este un enunț care poate fi adevărat (A) sau fals (F).\n\n### Operatori logici:\n- Negația (non)\n- Conjuncția (și)\n- Disjuncția (sau)\n- Implicația (implică)\n- Echivalența (echivalent cu)',
          problems: [
            {
              id: 'p9-1-2-1',
              question: 'Valoarea de adevăr a propoziției "2 + 2 = 5" este:',
              options: ['Adevărat', 'Fals'],
              correctAnswer: 1,
              explanation: 'Deoarece 2 + 2 = 4, propoziția este falsă.'
            },
            {
              id: 'p9-1-2-2',
              question: 'Negația propoziției "Toți elevii sunt prezenți" este:',
              options: ['Niciun elev nu este prezent', 'Unii elevi nu sunt prezenți', 'Toți elevii sunt absenți', 'Unii elevi sunt prezenți'],
              correctAnswer: 1,
              explanation: 'Negația lui "Toți" este "Există cel puțin unul care nu".'
            },
            {
              id: 'p9-1-2-3',
              question: 'Propoziția P și Q este adevărată dacă:',
              options: ['P este adevărată', 'Q este adevărată', 'Ambele sunt adevărate', 'Cel puțin una este adevărată'],
              correctAnswer: 2,
              explanation: 'Conjuncția este adevărată doar când ambii termeni sunt adevărați.'
            },
            {
              id: 'p9-1-2-4',
              question: 'Propoziția P sau Q este falsă dacă:',
              options: ['P este falsă', 'Q este falsă', 'Ambele sunt false', 'Una este falsă'],
              correctAnswer: 2,
              explanation: 'Disjuncția este falsă doar când ambii termeni sunt falși.'
            },
            {
              id: 'p9-1-2-5',
              question: 'Implicația P -> Q este falsă doar dacă:',
              options: ['P=A, Q=F', 'P=F, Q=A', 'P=F, Q=F', 'P=A, Q=A'],
              correctAnswer: 0,
              explanation: 'O promisiune este încălcată doar dacă ipoteza este adevărată și concluzia falsă.'
            },
            {
              id: 'p9-1-2-6',
              question: 'Care este simbolul pentru conjuncție?',
              options: ['v', '^', 'non', '->'],
              correctAnswer: 1,
              explanation: '^ reprezintă "și".'
            },
            {
              id: 'p9-1-2-7',
              question: 'Care este simbolul pentru disjuncție?',
              options: ['v', '^', 'non', '<->'],
              correctAnswer: 0,
              explanation: 'v reprezintă "sau".'
            },
            {
              id: 'p9-1-2-8',
              question: 'Echivalența P <-> Q este adevărată dacă:',
              options: ['P și Q au aceeași valoare de adevăr', 'P și Q au valori diferite', 'P este adevărată', 'Q este falsă'],
              correctAnswer: 0,
              explanation: 'Echivalența înseamnă "dacă și numai dacă".'
            },
            {
              id: 'p9-1-2-9',
              question: 'Un predicat depinde de:',
              options: ['O variabilă', 'O constantă', 'O propoziție', 'Nimic'],
              correctAnswer: 0,
              explanation: 'Un predicat devine propoziție când variabila primește o valoare.'
            },
            {
              id: 'p9-1-2-10',
              question: 'Cuantificatorul universal se notează cu:',
              options: ['E', 'A', 'in', 'subset'],
              correctAnswer: 1,
              explanation: 'A (întors) înseamnă "pentru orice".'
            }
          ]
        }
      ]
    },
    {
      id: '9-functii',
      title: 'Funcții',
      lessons: [
        { 
          id: '9-2-1', 
          title: 'Noțiunea de funcție', 
          content: '# Noțiunea de funcție\n\nO funcție f: A -> B este o lege care asociază fiecărui element din A un singur element din B.',
          problems: [
            {
              id: 'p9-2-1-1',
              question: 'Dacă f(x) = 2x + 1, cât este f(3)?',
              options: ['5', '6', '7', '8'],
              correctAnswer: 2,
              explanation: 'f(3) = 2(3) + 1 = 6 + 1 = 7.'
            },
            {
              id: 'p9-2-1-2',
              question: 'Domeniul de definiție al funcției f: {1, 2} -> R este:',
              options: ['R', '{1, 2}', '{1}', '{2}'],
              correctAnswer: 1,
              explanation: 'Domeniul este prima mulțime, A.'
            },
            {
              id: 'p9-2-1-3',
              question: 'Codomeniul funcției f: A -> B este:',
              options: ['A', 'B', 'f(A)', 'R'],
              correctAnswer: 1,
              explanation: 'Codomeniul este mulțimea în care funcția ia valori, B.'
            },
            {
              id: 'p9-2-1-4',
              question: 'Dacă f(x) = x^2, atunci f(-2) este:',
              options: ['-4', '4', '2', '-2'],
              correctAnswer: 1,
              explanation: '(-2)^2 = 4.'
            },
            {
              id: 'p9-2-1-5',
              question: 'O funcție este bine definită dacă:',
              options: ['Fiecare element din domeniu are o singură imagine', 'Fiecare element din codomeniu are o preimagine', 'Domeniul este egal cu codomeniul', 'Funcția este crescătoare'],
              correctAnswer: 0,
              explanation: 'Aceasta este definiția fundamentală a funcției.'
            },
            {
              id: 'p9-2-1-6',
              question: 'Dacă f(1) = 2 și f(2) = 3, atunci f(1) + f(2) este:',
              options: ['5', '6', '1', '0'],
              correctAnswer: 0,
              explanation: '2 + 3 = 5.'
            },
            {
              id: 'p9-2-1-7',
              question: 'Imaginea funcției f(x) = 0 este:',
              options: ['R', '{0}', 'mulțimea vidă', '{1}'],
              correctAnswer: 1,
              explanation: 'Funcția constantă are imaginea formată dintr-un singur punct.'
            },
            {
              id: 'p9-2-1-8',
              question: 'Dacă f(x) = x + 5, pentru ce x avem f(x) = 10?',
              options: ['5', '15', '0', '10'],
              correctAnswer: 0,
              explanation: 'x + 5 = 10 implica x = 5.'
            },
            {
              id: 'p9-2-1-9',
              question: 'Graficul unei funcții f: R -> R este o mulțime de:',
              options: ['Numere', 'Puncte în plan', 'Drepte', 'Cerc'],
              correctAnswer: 1,
              explanation: 'Gf = {(x, f(x)) | x aparține A}.'
            },
            {
              id: 'p9-2-1-10',
              question: 'Dacă f(x) = 3x, atunci f(x+1) - f(x) este:',
              options: ['1', '3', 'x', '3x'],
              correctAnswer: 1,
              explanation: '3(x+1) - 3x = 3x + 3 - 3x = 3.'
            }
          ]
        },
        { 
          id: '9-2-2', 
          title: 'Funcția de gradul I', 
          content: '# Funcția de gradul I\n\nForma generală: f(x) = ax + b, a != 0.\n\n- Graficul este o dreaptă.\n- Intersecția cu Ox: x = -b/a.\n- Intersecția cu Oy: f(0) = b.',
          problems: [
            {
              id: 'p9-2-2-1',
              question: 'Panta dreptei f(x) = -3x + 4 este:',
              options: ['4', '3', '-3', '1'],
              correctAnswer: 2,
              explanation: 'În forma f(x) = ax + b, panta este coeficientul a, deci -3.'
            },
            {
              id: 'p9-2-2-2',
              question: 'Intersecția cu axa Oy a funcției f(x) = 2x - 5 este:',
              options: ['(0, 2)', '(0, -5)', '(2.5, 0)', '(0, 0)'],
              correctAnswer: 1,
              explanation: 'Intersecția cu Oy este punctul (0, f(0)), deci (0, -5).'
            },
            {
              id: 'p9-2-2-3',
              question: 'Intersecția cu axa Ox a funcției f(x) = 2x - 4 este:',
              options: ['(2, 0)', '(0, -4)', '(-2, 0)', '(4, 0)'],
              correctAnswer: 0,
              explanation: '2x - 4 = 0 implica x = 2.'
            },
            {
              id: 'p9-2-2-4',
              question: 'Dacă a > 0, funcția de gradul I este:',
              options: ['Strict crescătoare', 'Strict descrescătoare', 'Constantă', 'Nulă'],
              correctAnswer: 0,
              explanation: 'Panta pozitivă indică o funcție crescătoare.'
            },
            {
              id: 'p9-2-2-5',
              question: 'Dacă a < 0, funcția de gradul I este:',
              options: ['Strict crescătoare', 'Strict descrescătoare', 'Constantă', 'Nulă'],
              correctAnswer: 1,
              explanation: 'Panta negativă indică o funcție descrescătoare.'
            },
            {
              id: 'p9-2-2-6',
              question: 'Punctul A(1, 2) aparține graficului funcției f(x) = x + 1?',
              options: ['Da', 'Nu'],
              correctAnswer: 0,
              explanation: 'f(1) = 1 + 1 = 2.'
            },
            {
              id: 'p9-2-2-7',
              question: 'Două drepte sunt paralele dacă au:',
              options: ['Aceeași pantă', 'Aceeași intersecție cu Oy', 'Pante opuse', 'Pante inverse'],
              correctAnswer: 0,
              explanation: 'a1 = a2 este condiția de paralelism.'
            },
            {
              id: 'p9-2-2-8',
              question: 'Funcția f(x) = 5 este o funcție:',
              options: ['De gradul I', 'Constantă', 'De gradul II', 'Identitate'],
              correctAnswer: 1,
              explanation: 'Deoarece a = 0.'
            },
            {
              id: 'p9-2-2-9',
              question: 'Soluția inecuației 2x - 4 > 0 este:',
              options: ['x > 2', 'x < 2', 'x > -2', 'x < -2'],
              correctAnswer: 0,
              explanation: '2x > 4 implica x > 2.'
            },
            {
              id: 'p9-2-2-10',
              question: 'Dacă f(x) = ax + b trece prin origine, atunci:',
              options: ['a = 0', 'b = 0', 'a = b', 'a = 1'],
              correctAnswer: 1,
              explanation: 'f(0) = 0 implica b = 0.'
            }
          ]
        }
      ]
    },
    {
      id: '9-grad2',
      title: 'Ecuația și funcția de gradul al II-lea',
      lessons: [
        { 
          id: '9-3-1', 
          title: 'Ecuația de gradul II', 
          content: '# Ecuația de gradul II\n\nax^2 + bx + c = 0\n\nDelta = b^2 - 4ac\n\n- Dacă Delta > 0, două rădăcini reale distincte.\n- Dacă Delta = 0, o rădăcină reală dublă.\n- Dacă Delta < 0, nicio rădăcină reală.',
          problems: [
            {
              id: 'p9-3-1-1',
              question: 'Calculați Delta pentru ecuația x^2 - 5x + 6 = 0.',
              options: ['1', '25', '24', '0'],
              correctAnswer: 0,
              explanation: 'Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1.'
            },
            {
              id: 'p9-3-1-2',
              question: 'Care sunt rădăcinile ecuației x^2 - 5x + 6 = 0?',
              options: ['2 și 3', '1 și 6', '-2 și -3', '0 și 5'],
              correctAnswer: 0,
              explanation: 'x1, x2 = (5 +/- sqrt(1))/2, deci 2 și 3.'
            },
            {
              id: 'p9-3-1-3',
              question: 'Dacă Delta < 0, ecuația are:',
              options: ['Două rădăcini reale', 'O rădăcină reală', 'Nicio rădăcină reală', 'Rădăcini infinite'],
              correctAnswer: 2,
              explanation: 'Discriminantul negativ indică absența rădăcinilor reale.'
            },
            {
              id: 'p9-3-1-4',
              question: 'Suma rădăcinilor ecuației x^2 + px + q = 0 este:',
              options: ['p', '-p', 'q', '-q'],
              correctAnswer: 1,
              explanation: 'Relațiile lui Viète: x1 + x2 = -b/a.'
            },
            {
              id: 'p9-3-1-5',
              question: 'Produsul rădăcinilor ecuației x^2 + px + q = 0 este:',
              options: ['p', '-p', 'q', '-q'],
              correctAnswer: 2,
              explanation: 'Relațiile lui Viète: x1 * x2 = c/a.'
            },
            {
              id: 'p9-3-1-6',
              question: 'Calculați Delta pentru x^2 - 4x + 4 = 0.',
              options: ['16', '0', '8', '4'],
              correctAnswer: 1,
              explanation: 'Delta = (-4)^2 - 4(1)(4) = 16 - 16 = 0.'
            },
            {
              id: 'p9-3-1-7',
              question: 'Ecuația x^2 + 1 = 0 are rădăcini reale?',
              options: ['Da', 'Nu'],
              correctAnswer: 1,
              explanation: 'Delta = 0^2 - 4(1)(1) = -4 < 0.'
            },
            {
              id: 'p9-3-1-8',
              question: 'Dacă x1 = 2 și x2 = 3, ecuația este:',
              options: ['x^2 - 5x + 6 = 0', 'x^2 + 5x + 6 = 0', 'x^2 - 6x + 5 = 0', 'x^2 + 6x + 5 = 0'],
              correctAnswer: 0,
              explanation: 'x^2 - (S)x + P = 0 implica x^2 - 5x + 6 = 0.'
            },
            {
              id: 'p9-3-1-9',
              question: 'Coeficientul a în ecuația 2x^2 - 3x + 1 = 0 este:',
              options: ['2', '-3', '1', '0'],
              correctAnswer: 0,
              explanation: 'a este coeficientul lui x^2.'
            },
            {
              id: 'p9-3-1-10',
              question: 'Valoarea lui c în ecuația x^2 - 5x + 6 = 0 este:',
              options: ['1', '-5', '6', '0'],
              correctAnswer: 2,
              explanation: 'c este termenul liber.'
            }
          ]
        }
      ]
    }
  ],
  10: [
    {
      id: '10-puteri',
      title: 'Puteri și radicali',
      lessons: [
        { 
          id: '10-1-1', 
          title: 'Radicali de ordin n', 
          content: '# Radicali\n\nsqrt_n(a) = b <=> b^n = a.\n\n### Proprietăți:\n1. sqrt_n(a) * sqrt_n(b) = sqrt_n(ab)\n2. sqrt_n(a) / sqrt_n(b) = sqrt_n(a/b)\n3. (sqrt_n(a))^m = sqrt_n(a^m)',
          problems: [
            {
              id: 'p10-1-1-1',
              question: 'Calculați sqrt_3(27).',
              options: ['2', '3', '9', '27'],
              correctAnswer: 1,
              explanation: '3^3 = 27, deci sqrt_3(27) = 3.'
            },
            {
              id: 'p10-1-1-2',
              question: 'Calculați sqrt(64).',
              options: ['6', '7', '8', '9'],
              correctAnswer: 2,
              explanation: '8^2 = 64.'
            },
            {
              id: 'p10-1-1-3',
              question: 'sqrt_4(16) este egal cu:',
              options: ['2', '4', '8', '1'],
              correctAnswer: 0,
              explanation: '2^4 = 16.'
            },
            {
              id: 'p10-1-1-4',
              question: 'sqrt_n(a^n) pentru n impar este:',
              options: ['a', '|a|', 'a^2', '1'],
              correctAnswer: 0,
              explanation: 'Pentru ordin impar, radicalul și puterea se anulează direct.'
            },
            {
              id: 'p10-1-1-5',
              question: 'sqrt_n(a^n) pentru n par este:',
              options: ['a', '|a|', '-a', '0'],
              correctAnswer: 1,
              explanation: 'Pentru ordin par, rezultatul este modulul bazei.'
            },
            {
              id: 'p10-1-1-6',
              question: 'Calculați sqrt(2) * sqrt(8).',
              options: ['2', '4', '16', 'sqrt(10)'],
              correctAnswer: 1,
              explanation: 'sqrt(2 * 8) = sqrt(16) = 4.'
            },
            {
              id: 'p10-1-1-7',
              question: 'sqrt(50) / sqrt(2) este:',
              options: ['25', '5', 'sqrt(48)', '10'],
              correctAnswer: 1,
              explanation: 'sqrt(50/2) = sqrt(25) = 5.'
            },
            {
              id: 'p10-1-1-8',
              question: '(sqrt_3(5))^3 este:',
              options: ['5', '25', '125', '1'],
              correctAnswer: 0,
              explanation: 'Puterea și radicalul de același ordin se anulează.'
            },
            {
              id: 'p10-1-1-9',
              question: 'sqrt_3(-8) este:',
              options: ['2', '-2', 'Nu există', '0'],
              correctAnswer: 1,
              explanation: 'Radicalul de ordin impar acceptă numere negative.'
            },
            {
              id: 'p10-1-1-10',
              question: 'sqrt(-4) în mulțimea numerelor reale este:',
              options: ['2', '-2', 'Nu este definit', 'i'],
              correctAnswer: 2,
              explanation: 'În R, radicalul de ordin par nu acceptă numere negative.'
            }
          ]
        },
        { 
          id: '10-1-2', 
          title: 'Logaritmi', 
          content: '# Logaritmi\n\nlog_a(b) = x <=> a^x = b.\n\nCondiții: a > 0, a != 1, b > 0.\n\n### Formule fundamentale:\n- log_a(xy) = log_a(x) + log_a(y)\n- log_a(x/y) = log_a(x) - log_a(y)\n- log_a(x^n) = n * log_a(x)',
          problems: [
            {
              id: 'p10-1-2-1',
              question: 'Calculați log_2(8).',
              options: ['2', '3', '4', '16'],
              correctAnswer: 1,
              explanation: '2^3 = 8, deci log_2(8) = 3.'
            },
            {
              id: 'p10-1-2-2',
              question: 'Calculați log_5(25).',
              options: ['2', '5', '1', '10'],
              correctAnswer: 0,
              explanation: '5^2 = 25.'
            },
            {
              id: 'p10-1-2-3',
              question: 'log_a(1) este egal cu:',
              options: ['a', '1', '0', 'infinit'],
              correctAnswer: 2,
              explanation: 'Orice număr la puterea 0 este 1.'
            },
            {
              id: 'p10-1-2-4',
              question: 'log_a(a) este egal cu:',
              options: ['a', '1', '0', 'a^2'],
              correctAnswer: 1,
              explanation: 'a^1 = a.'
            },
            {
              id: 'p10-1-2-5',
              question: 'log_2(16) este:',
              options: ['2', '4', '8', '32'],
              correctAnswer: 1,
              explanation: '2^4 = 16.'
            },
            {
              id: 'p10-1-2-6',
              question: 'log_10(1000) este:',
              options: ['2', '3', '4', '1'],
              correctAnswer: 1,
              explanation: '10^3 = 1000.'
            },
            {
              id: 'p10-1-2-7',
              question: 'lg(100) este:',
              options: ['1', '2', '10', '0'],
              correctAnswer: 1,
              explanation: 'lg este logaritm în baza 10. 10^2 = 100.'
            },
            {
              id: 'p10-1-2-8',
              question: 'ln(e) este:',
              options: ['0', 'e', '1', '10'],
              correctAnswer: 2,
              explanation: 'ln este logaritm în baza e. e^1 = e.'
            },
            {
              id: 'p10-1-2-9',
              question: 'Calculați log_2(2) + log_2(4).',
              options: ['2', '3', '4', '6'],
              correctAnswer: 1,
              explanation: '1 + 2 = 3.'
            },
            {
              id: 'p10-1-2-10',
              question: 'log_3(9) este:',
              options: ['2', '3', '1', '9'],
              correctAnswer: 0,
              explanation: '3^2 = 9.'
            }
          ]
        }
      ]
    },
    {
      id: '10-numere-complexe',
      title: 'Numere complexe',
      lessons: [
        { 
          id: '10-2-1', 
          title: 'Forma algebrică', 
          content: '# Numere Complexe\n\nz = a + bi, unde i^2 = -1.\n\n- a este partea reală (Re(z))\n- b este partea imaginară (Im(z))\n- Modulul: |z| = sqrt(a^2 + b^2)',
          problems: [
            {
              id: 'p10-2-1-1',
              question: 'Care este partea imaginară a numărului z = 3 - 4i?',
              options: ['3', '4', '-4', '-4i'],
              correctAnswer: 2,
              explanation: 'Partea imaginară este coeficientul lui i, adică -4.'
            },
            {
              id: 'p10-2-1-2',
              question: 'Calculați i^2.',
              options: ['1', '-1', '0', 'i'],
              correctAnswer: 1,
              explanation: 'Prin definiție, unitatea imaginară i are proprietatea i^2 = -1.'
            },
            {
              id: 'p10-2-1-3',
              question: 'Modulul numărului z = 3 + 4i este:',
              options: ['7', '5', '25', '1'],
              correctAnswer: 1,
              explanation: '|z| = sqrt(3^2 + 4^2) = sqrt(25) = 5.'
            },
            {
              id: 'p10-2-1-4',
              question: 'Conjugatul numărului z = a + bi este:',
              options: ['a - bi', '-a + bi', '-a - bi', 'a + bi'],
              correctAnswer: 0,
              explanation: 'Conjugatul se obține prin schimbarea semnului părții imaginare.'
            },
            {
              id: 'p10-2-1-5',
              question: 'Calculați (1+i) + (2-3i).',
              options: ['3-2i', '3+4i', '1-2i', '3-4i'],
              correctAnswer: 0,
              explanation: '(1+2) + (1-3)i = 3 - 2i.'
            },
            {
              id: 'p10-2-1-6',
              question: 'Calculați i^3.',
              options: ['i', '-i', '1', '-1'],
              correctAnswer: 1,
              explanation: 'i^3 = i^2 * i = -1 * i = -i.'
            },
            {
              id: 'p10-2-1-7',
              question: 'Calculați i^4.',
              options: ['i', '-i', '1', '-1'],
              correctAnswer: 2,
              explanation: 'i^4 = (i^2)^2 = (-1)^2 = 1.'
            },
            {
              id: 'p10-2-1-8',
              question: 'Partea reală a numărului z = 5i este:',
              options: ['5', 'i', '0', '1'],
              correctAnswer: 2,
              explanation: 'z = 0 + 5i, deci partea reală este 0.'
            },
            {
              id: 'p10-2-1-9',
              question: 'Dacă z = 1+i, atunci z_barat este:',
              options: ['1-i', '-1+i', '-1-i', '1+i'],
              correctAnswer: 0,
              explanation: 'Schimbăm semnul părții imaginare.'
            },
            {
              id: 'p10-2-1-10',
              question: 'Calculați modulul lui z = i.',
              options: ['0', '1', '-1', 'i'],
              correctAnswer: 1,
              explanation: '|i| = sqrt(0^2 + 1^2) = 1.'
            }
          ]
        }
      ]
    },
    {
      id: '10-probabilitati',
      title: 'Metode de numărare și probabilități',
      lessons: [
        { 
          id: '10-3-1', 
          title: 'Permutări, Aranjamente, Combinări', 
          content: '# Combinatorică\n\n- **Permutări**: P_n = n!\n- **Aranjamente**: A_n^k = n! / (n-k)!\n- **Combinări**: C_n^k = n! / (k!(n-k)!)',
          problems: [
            {
              id: 'p10-3-1-1',
              question: 'Calculați P_3.',
              options: ['3', '6', '9', '1'],
              correctAnswer: 1,
              explanation: 'P_3 = 3! = 3 * 2 * 1 = 6.'
            },
            {
              id: 'p10-3-1-2',
              question: 'Calculați P_4.',
              options: ['4', '12', '24', '16'],
              correctAnswer: 2,
              explanation: '4! = 4 * 3 * 2 * 1 = 24.'
            },
            {
              id: 'p10-3-1-3',
              question: 'Formula pentru combinări C_n^k este:',
              options: ['n! / (n-k)!', 'n! / (k!(n-k)!)', 'n!', 'k!'],
              correctAnswer: 1,
              explanation: 'Combinările sunt submulțimi unde ordinea nu contează.'
            },
            {
              id: 'p10-3-1-4',
              question: 'Calculați C_3^2.',
              options: ['3', '6', '1', '2'],
              correctAnswer: 0,
              explanation: '3! / (2!1!) = 6 / 2 = 3.'
            },
            {
              id: 'p10-3-1-5',
              question: 'Calculați A_3^2.',
              options: ['3', '6', '9', '1'],
              correctAnswer: 1,
              explanation: 'A_3^2 = 3! / (3-2)! = 6.'
            },
            {
              id: 'p10-3-1-6',
              question: 'Câte permutări are mulțimea {1, 2}?',
              options: ['1', '2', '3', '4'],
              correctAnswer: 1,
              explanation: 'P_2 = 2! = 2.'
            },
            {
              id: 'p10-3-1-7',
              question: 'C_n^0 este egal cu:',
              options: ['0', '1', 'n', 'n!'],
              correctAnswer: 1,
              explanation: 'Există o singură submulțime cu 0 elemente (mulțimea vidă).'
            },
            {
              id: 'p10-3-1-8',
              question: 'C_n^n este egal cu:',
              options: ['0', '1', 'n', 'n!'],
              correctAnswer: 1,
              explanation: 'Există o singură submulțime cu toate elementele.'
            },
            {
              id: 'p10-3-1-9',
              question: 'Calculați P_0.',
              options: ['0', '1', 'Nu există', 'infinit'],
              correctAnswer: 1,
              explanation: 'Prin convenție, 0! = 1.'
            },
            {
              id: 'p10-3-1-10',
              question: 'Diferența dintre aranjamente și combinări este:',
              options: ['Ordinea contează la aranjamente', 'Ordinea contează la combinări', 'Nu există nicio diferență', 'Aranjamentele sunt mai mici'],
              correctAnswer: 0,
              explanation: 'La aranjamente ordinea elementelor este importantă.'
            }
          ]
        },
        { 
          id: '10-3-2', 
          title: 'Probabilități', 
          content: '# Probabilități\n\nP = (nr. cazuri favorabile) / (nr. cazuri posibile)',
          problems: [
            {
              id: 'p10-3-2-1',
              question: 'Într-o urnă sunt 5 bile albe și 3 bile negre. Probabilitatea de a extrage o bilă neagră este:',
              options: ['3/5', '5/8', '3/8', '1/2'],
              correctAnswer: 2,
              explanation: 'Nr. cazuri favorabile = 3 (bile negre), Nr. cazuri posibile = 5 + 3 = 8. Probabilitatea este 3/8.'
            },
            {
              id: 'p10-3-2-2',
              question: 'Probabilitatea unui eveniment sigur este:',
              options: ['0', '0.5', '1', 'infinit'],
              correctAnswer: 2,
              explanation: 'Un eveniment sigur are probabilitatea 100%, adică 1.'
            },
            {
              id: 'p10-3-2-3',
              question: 'Probabilitatea unui eveniment imposibil este:',
              options: ['0', '1', '-1', '0.5'],
              correctAnswer: 0,
              explanation: 'Un eveniment imposibil are probabilitatea 0.'
            },
            {
              id: 'p10-3-2-4',
              question: 'La aruncarea unui zar, probabilitatea de a obține fața cu numărul 6 este:',
              options: ['1/2', '1/6', '6/6', '1/3'],
              correctAnswer: 1,
              explanation: 'Există o singură față favorabilă din 6 posibile.'
            },
            {
              id: 'p10-3-2-5',
              question: 'La aruncarea unui zar, probabilitatea de a obține un număr par este:',
              options: ['1/2', '1/3', '1/6', '2/3'],
              correctAnswer: 0,
              explanation: 'Numerele pare sunt 2, 4, 6 (3 cazuri favorabile). 3/6 = 1/2.'
            },
            {
              id: 'p10-3-2-6',
              question: 'Suma probabilităților tuturor evenimentelor elementare este:',
              options: ['0', '0.5', '1', '100'],
              correctAnswer: 2,
              explanation: 'Suma probabilităților dintr-un câmp de probabilitate este întotdeauna 1.'
            },
            {
              id: 'p10-3-2-7',
              question: 'Dacă P(A) = 0.3$, atunci probabilitatea evenimentului contrar A_barat este:',
              options: ['0.3', '0.7', '1', '0'],
              correctAnswer: 1,
              explanation: 'P(A_barat) = 1 - P(A) = 1 - 0.3 = 0.7.'
            },
            {
              id: 'p10-3-2-8',
              question: 'Probabilitatea ca un număr de o cifră să fie divizibil cu 3 este:',
              options: ['3/10', '4/10', '3/9', '1/3'],
              correctAnswer: 1,
              explanation: 'Numerele sunt 0, 3, 6, 9 (4 cazuri favorabile din 10 posibile: 0-9).'
            },
            {
              id: 'p10-3-2-9',
              question: 'Într-un pachet de 52 de cărți, probabilitatea de a extrage un as este:',
              options: ['1/52', '4/52', '1/13', '1/4'],
              correctAnswer: 1,
              explanation: 'Există 4 ași în pachet. 4/52 = 1/13.'
            },
            {
              id: 'p10-3-2-10',
              question: 'Probabilitatea este întotdeauna un număr în intervalul:',
              options: ['(0, 1)', '[0, 1]', '[-1, 1]', 'R'],
              correctAnswer: 1,
              explanation: 'Probabilitatea nu poate fi negativă sau mai mare decât 1.'
            }
          ]
        }
      ]
    }
  ],
  11: [
    {
      id: '11-matrice',
      title: 'Matrice și determinanți',
      lessons: [
        { 
          id: '11-1-1', 
          title: 'Operații cu matrice', 
          content: '# Matrice\n\nO matrice este un tabel dreptunghiular de numere.\n\n### Operații:\n- **Adunarea**: Se adună elementele corespondente.\n- **Înmulțirea cu scalar**: Fiecare element se înmulțește cu scalarul.\n- **Înmulțirea matricelor**: Linia primei matrice cu coloana celei de-a doua.',
          problems: [
            {
              id: 'p11-1-1-1',
              question: 'Dacă $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, atunci $2A$ este:',
              options: ['$\begin{pmatrix} 2 & 2 \\ 3 & 4 \end{pmatrix}$', '$\begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}$', '$\begin{pmatrix} 3 & 4 \\ 5 & 6 \end{pmatrix}$', '$\begin{pmatrix} 1 & 4 \\ 3 & 8 \end{pmatrix}$'],
              correctAnswer: 1,
              explanation: 'Fiecare element se înmulțește cu 2.'
            },
            {
              id: 'p11-1-1-2',
              question: 'Matricea unitate $I_2$ este:',
              options: ['$\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$', '$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$', '$\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$', '$\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$'],
              correctAnswer: 1,
              explanation: 'Matricea unitate are 1 pe diagonala principală și 0 în rest.'
            },
            {
              id: 'p11-1-1-3',
              question: 'Suma matricelor $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ este:',
              options: ['$\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$', '$\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$', '$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$', '$I_2$'],
              correctAnswer: 0,
              explanation: 'Se adună elementele corespondente.'
            },
            {
              id: 'p11-1-1-4',
              question: 'O matrice cu o singură linie se numește:',
              options: ['Matrice coloană', 'Matrice linie', 'Matrice pătratică', 'Matrice nulă'],
              correctAnswer: 1,
              explanation: 'Este o matrice de tip $1 \times n$.'
            },
            {
              id: 'p11-1-1-5',
              question: 'O matrice cu o singură coloană se numește:',
              options: ['Matrice coloană', 'Matrice linie', 'Matrice pătratică', 'Matrice nulă'],
              correctAnswer: 0,
              explanation: 'Este o matrice de tip $m \times 1$.'
            },
            {
              id: 'p11-1-1-6',
              question: 'Urma unei matrice (Tr) este:',
              options: ['Suma elementelor de pe diagonala principală', 'Produsul elementelor de pe diagonala principală', 'Determinantul matricei', 'Suma tuturor elementelor'],
              correctAnswer: 0,
              explanation: 'Tr(A) = $a_{11} + a_{22} + ... + a_{nn}$.'
            },
            {
              id: 'p11-1-1-7',
              question: 'Transpusa matricei $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ este:',
              options: ['$\begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$', '$\begin{pmatrix} 4 & 2 \\ 3 & 1 \end{pmatrix}$', '$\begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$', '$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$'],
              correctAnswer: 0,
              explanation: 'Liniile devin coloane și coloanele devin linii.'
            },
            {
              id: 'p11-1-1-8',
              question: 'Dacă $A$ este de tip $2 \times 3$ și $B$ este de tip $3 \times 2$, atunci $A \cdot B$ este de tip:',
              options: ['$2 \times 3$', '$3 \times 2$', '$2 \times 2$', '$3 \times 3$'],
              correctAnswer: 2,
              explanation: 'Rezultatul are numărul de linii al primei matrice și numărul de coloane al celei de-a doua.'
            },
            {
              id: 'p11-1-1-9',
              question: 'Înmulțirea matricelor este în general:',
              options: ['Comutativă', 'Necomutativă', 'Asociativă', 'Distributivă'],
              correctAnswer: 1,
              explanation: '$A \cdot B \neq B \cdot A$ în majoritatea cazurilor.'
            },
            {
              id: 'p11-1-1-10',
              question: 'Matricea nulă $O_2$ are toate elementele egale cu:',
              options: ['1', '0', '-1', 'i'],
              correctAnswer: 1,
              explanation: 'Toate elementele sunt zero.'
            }
          ]
        },
        { 
          id: '11-1-2', 
          title: 'Determinanți', 
          content: '# Determinanți\n\nCalculul determinantului de ordin 2:\n$$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$',
          problems: [
            {
              id: 'p11-1-2-1',
              question: 'Calculați determinantul matricei ((2, 3), (1, 5)).',
              options: ['7', '13', '10', '3'],
              correctAnswer: 0,
              explanation: '2 * 5 - 3 * 1 = 10 - 3 = 7.'
            },
            {
              id: 'p11-1-2-2',
              question: 'Determinantul matricei unitate I2 este:',
              options: ['0', '1', '2', '-1'],
              correctAnswer: 1,
              explanation: 'det(I2) = 1 * 1 - 0 * 0 = 1.'
            },
            {
              id: 'p11-1-2-3',
              question: 'Dacă det(A) = 5, atunci det(2A) pentru o matrice 2x2 este:',
              options: ['10', '20', '5', '25'],
              correctAnswer: 1,
              explanation: 'det(kA) = k^n * det(A). Pentru n=2, 2^2 * 5 = 20.'
            },
            {
              id: 'p11-1-2-4',
              question: 'Determinantul unei matrice cu două linii identice este:',
              options: ['1', '0', '-1', 'Inifinit'],
              correctAnswer: 1,
              explanation: 'O proprietate a determinanților este că sunt nuli dacă au linii/coloane identice.'
            },
            {
              id: 'p11-1-2-5',
              question: 'Calculați det((1, 2), (2, 4)).',
              options: ['0', '1', '4', '8'],
              correctAnswer: 0,
              explanation: '1 * 4 - 2 * 2 = 0.'
            },
            {
              id: 'p11-1-2-6',
              question: 'Dacă det(A) = 3 și det(B) = 4, atunci det(A * B) este:',
              options: ['7', '12', '1', '0.75'],
              correctAnswer: 1,
              explanation: 'det(A * B) = det(A) * det(B) = 3 * 4 = 12.'
            },
            {
              id: 'p11-1-2-7',
              question: 'Determinantul unei matrice transpuse det(At) este:',
              options: ['-det(A)', '1/det(A)', 'det(A)', '0'],
              correctAnswer: 2,
              explanation: 'Determinantul unei matrice este egal cu determinantul transpusei sale.'
            },
            {
              id: 'p11-1-2-8',
              question: 'Calculați det((0, 1), (1, 0)).',
              options: ['0', '1', '-1', 'i'],
              correctAnswer: 2,
              explanation: '0 * 0 - 1 * 1 = -1.'
            },
            {
              id: 'p11-1-2-9',
              question: 'Dacă o matrice are o linie de zerouri, determinantul este:',
              options: ['1', '0', 'Nedefinit', '-1'],
              correctAnswer: 1,
              explanation: 'Orice matrice cu o linie sau coloană nulă are determinantul 0.'
            },
            {
              id: 'p11-1-2-10',
              question: 'Determinantul de ordin 3 se poate calcula prin regula lui:',
              options: ['Pitagora', 'Sarrus', 'Thales', 'Viète'],
              correctAnswer: 1,
              explanation: 'Regula lui Sarrus sau regula triunghiului sunt metode specifice ordinului 3.'
            }
          ]
        },
        { 
          id: '11-1-3', 
          title: 'Inversa unei matrice', 
          content: '# Inversa unei matrice\n\n$A \cdot A^{-1} = I_n$\n\n$A^{-1} = \frac{1}{\det A} \cdot A^*$',
          problems: [
            {
              id: 'p11-1-3-1',
              question: 'O matrice A este inversabilă dacă și numai dacă:',
              options: ['det(A) = 0', 'det(A) != 0', 'A este matrice nulă', 'A este matrice unitate'],
              correctAnswer: 1,
              explanation: 'Condiția de inversabilitate este ca determinantul să fie nenul.'
            },
            {
              id: 'p11-1-3-2',
              question: 'Inversa matricei unitate I2 este:',
              options: ['O2', 'I2', '-I2', 'Nu există'],
              correctAnswer: 1,
              explanation: 'I2 * I2 = I2, deci inversa lui I2 este chiar I2.'
            },
            {
              id: 'p11-1-3-3',
              question: 'Dacă A este inversabilă, atunci (A^-1)^-1 este:',
              options: ['A', 'I', 'A^-1', 'At'],
              correctAnswer: 0,
              explanation: 'Inversa inversei este matricea inițială.'
            },
            {
              id: 'p11-1-3-4',
              question: 'Formula pentru inversa unei matrice este A^-1 = (1/det A) *:',
              options: ['At', 'A*', 'A', 'I'],
              correctAnswer: 1,
              explanation: 'A* este adjuncta matricei A.'
            },
            {
              id: 'p11-1-3-5',
              question: 'Matricea ((1, 2), (2, 4)) este inversabilă?',
              options: ['Da', 'Nu'],
              correctAnswer: 1,
              explanation: 'det = 1*4 - 2*2 = 0, deci nu este inversabilă.'
            },
            {
              id: 'p11-1-3-6',
              question: 'Dacă A și B sunt inversabile, atunci (A*B)^-1 este:',
              options: ['A^-1 * B^-1', 'B^-1 * A^-1', 'A * B', 'B * A'],
              correctAnswer: 1,
              explanation: 'Inversa produsului este produsul inverselor în ordine inversă.'
            },
            {
              id: 'p11-1-3-7',
              question: 'Determinantul inversei det(A^-1) este:',
              options: ['det(A)', '-det(A)', '1/det(A)', '0'],
              correctAnswer: 2,
              explanation: 'det(A * A^-1) = det(I) = 1 => det(A) * det(A^-1) = 1.'
            },
            {
              id: 'p11-1-3-8',
              question: 'Adjuncta matricei A se obține din transpusa matricei:',
              options: ['Elementelor', 'Complementelor algebrici', 'Nule', 'Unitate'],
              correctAnswer: 1,
              explanation: 'Se înlocuiește fiecare element cu complementul său algebric, apoi se transpune.'
            },
            {
              id: 'p11-1-3-9',
              question: 'O matrice pătratică A se numește singulară dacă:',
              options: ['det(A) = 0', 'det(A) != 0', 'A = I', 'A = O'],
              correctAnswer: 0,
              explanation: 'Matricele singulare sunt cele care nu au inversă.'
            },
            {
              id: 'p11-1-3-10',
              question: 'Inversa matricei ((a, b), (c, d)) are pe prima poziție (1,1) elementul:',
              options: ['a/det', 'd/det', '-b/det', '-c/det'],
              correctAnswer: 1,
              explanation: 'Adjuncta schimbă a cu d și semnele lui b și c.'
            }
          ]
        }
      ]
    },
    {
      id: '11-limite',
      title: 'Limite de funcții',
      lessons: [
        { 
          id: '11-2-1', 
          title: 'Limite remarcabile', 
          content: '# Limite\n\n$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$\n\n$\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e$',
          problems: [
            {
              id: 'p11-2-1-1',
              question: 'Calculați limita când x tinde la infinit din (2x + 1)/(x - 3).',
              options: ['0', '1', '2', 'infinit'],
              correctAnswer: 2,
              explanation: 'Gradul numărătorului este egal cu cel al numitorului, deci limita este raportul coeficienților dominanți: 2/1 = 2.'
            },
            {
              id: 'p11-2-1-2',
              question: 'Limita când x tinde la 0 din sin(x)/x este:',
              options: ['0', '1', 'infinit', 'nu există'],
              correctAnswer: 1,
              explanation: 'Aceasta este o limită remarcabilă fundamentală.'
            },
            {
              id: 'p11-2-1-3',
              question: 'Limita când x tinde la infinit din (1 + 1/x)^x este:',
              options: ['0', '1', 'e', 'infinit'],
              correctAnswer: 2,
              explanation: 'Aceasta este definiția numărului e.'
            },
            {
              id: 'p11-2-1-4',
              question: 'Limita când x tinde la 0 din ln(1+x)/x este:',
              options: ['0', '1', 'e', 'ln(2)'],
              correctAnswer: 1,
              explanation: 'O altă limită remarcabilă derivată din definiția lui e.'
            },
            {
              id: 'p11-2-1-5',
              question: 'Limita când x tinde la infinit din 1/x este:',
              options: ['0', '1', 'infinit', '-infinit'],
              correctAnswer: 0,
              explanation: 'Un număr finit împărțit la ceva care crește nemărginit tinde la 0.'
            },
            {
              id: 'p11-2-1-6',
              question: 'Limita când x tinde la infinit din x^2 - x este:',
              options: ['0', '1', 'infinit', '-infinit'],
              correctAnswer: 2,
              explanation: 'Termenul de grad cel mai mare domină comportamentul la infinit.'
            },
            {
              id: 'p11-2-1-7',
              question: 'Cazul de nedeterminare 0/0 se poate rezolva uneori cu regula lui:',
              options: ['L\'Hospital', 'Pitagora', 'Thales', 'Newton'],
              correctAnswer: 0,
              explanation: 'Regula lui L\'Hospital folosește derivatele pentru a calcula limite.'
            },
            {
              id: 'p11-2-1-8',
              question: 'Limita când x tinde la 0 din cos(x) este:',
              options: ['0', '1', 'infinit', '-1'],
              correctAnswer: 1,
              explanation: 'Funcția cosinus este continuă, deci limita este cos(0) = 1.'
            },
            {
              id: 'p11-2-1-9',
              question: 'Limita când x tinde la infinit din e^(-x) este:',
              options: ['0', '1', 'e', 'infinit'],
              correctAnswer: 0,
              explanation: 'e^(-infinit) = 1/e^(infinit) = 0.'
            },
            {
              id: 'p11-2-1-10',
              question: 'Dacă gradul numărătorului este mai mic decât gradul numitorului, limita la infinit a funcției raționale este:',
              options: ['0', '1', 'infinit', 'raportul coeficienților'],
              correctAnswer: 0,
              explanation: 'Numitorul crește mai repede, trăgând fracția spre 0.'
            }
          ]
        },
        { 
          id: '11-2-2', 
          title: 'Continuitate', 
          content: '# Continuitate\n\nO funcție este continuă în $x_0$ dacă $\lim_{x \to x_0} f(x) = f(x_0)$.',
          problems: [
            {
              id: 'p11-2-2-1',
              question: 'Dacă limita când x tinde la 2 din f(x) este 5 și f(2) = 5, funcția este continuă în x=2?',
              options: ['Da', 'Nu'],
              correctAnswer: 0,
              explanation: 'Deoarece limita este egală cu valoarea funcției, aceasta este continuă.'
            },
            {
              id: 'p11-2-2-2',
              question: 'O funcție f este continuă în x0 dacă limita la stânga, limita la dreapta și f(x0) sunt:',
              options: ['Diferite', 'Egale', 'Pozitive', 'Nule'],
              correctAnswer: 1,
              explanation: 'Aceasta este condiția de continuitate într-un punct.'
            },
            {
              id: 'p11-2-2-3',
              question: 'Funcția f(x) = 1/x este continuă în x = 0?',
              options: ['Da', 'Nu'],
              correctAnswer: 1,
              explanation: 'Funcția nu este definită în 0, deci nu poate fi continuă acolo.'
            },
            {
              id: 'p11-2-2-4',
              question: 'Orice funcție elementară (polinoame, sin, cos, exp) este continuă pe:',
              options: ['R', 'Domeniul de definiție', '[0, 1]', 'Z'],
              correctAnswer: 1,
              explanation: 'Funcțiile elementare sunt continue oriunde sunt definite.'
            },
            {
              id: 'p11-2-2-5',
              question: 'Dacă f este continuă pe [a, b] și f(a)*f(b) < 0, atunci există cel puțin un c în (a, b) astfel încât f(c) =:',
              options: ['1', '0', 'f(a)', 'f(b)'],
              correctAnswer: 1,
              explanation: 'Aceasta este proprietatea lui Darboux (teorema valorii intermediare).'
            },
            {
              id: 'p11-2-2-6',
              question: 'Suma a două funcții continue este o funcție:',
              options: ['Discontinuă', 'Continuă', 'Constantă', 'Derivabilă'],
              correctAnswer: 1,
              explanation: 'Continuitatea se păstrează prin operații algebrice.'
            },
            {
              id: 'p11-2-2-7',
              question: 'Funcția f(x) = |x| este continuă în x = 0?',
              options: ['Da', 'Nu'],
              correctAnswer: 0,
              explanation: 'Limita la stânga (0), la dreapta (0) și f(0) sunt toate egale cu 0.'
            },
            {
              id: 'p11-2-2-8',
              question: 'O funcție care nu este continuă într-un punct se numește:',
              options: ['Continuă', 'Discontinuă', 'Nulă', 'Infinită'],
              correctAnswer: 1,
              explanation: 'Punctul respectiv se numește punct de discontinuitate.'
            },
            {
              id: 'p11-2-2-9',
              question: 'Limita la dreapta în x=0 pentru f(x) = 1/x este:',
              options: ['0', '1', 'plus infinit', 'minus infinit'],
              correctAnswer: 2,
              explanation: 'Când x se apropie de 0 prin valori pozitive, 1/x crește la infinit.'
            },
            {
              id: 'p11-2-2-10',
              question: 'Dacă o funcție este derivabilă într-un punct, atunci ea este obligatoriu:',
              options: ['Constantă', 'Continuă', 'Pozitivă', 'Crescătoare'],
              correctAnswer: 1,
              explanation: 'Derivabilitatea implică continuitatea (dar nu și invers).'
            }
          ]
        }
      ]
    },
    {
      id: '11-derivate',
      title: 'Derivate',
      lessons: [
        { 
          id: '11-3-1', 
          title: 'Reguli de derivare', 
          content: '# Derivate\n\n- $(f+g)\' = f\' + g\'$\n- $(fg)\' = f\'g + fg\'$\n- $(f/g)\' = \frac{f\'g - fg\'}{g^2}$',
          problems: [
            {
              id: 'p11-3-1-1',
              question: 'Derivata funcției f(x) = x^2 este:',
              options: ['x', '2x', '2', 'x^3'],
              correctAnswer: 1,
              explanation: 'Folosind regula (x^n)\' = nx^(n-1), avem (x^2)\' = 2x.'
            },
            {
              id: 'p11-3-1-2',
              question: 'Derivata unei funcții constante f(x) = c este:',
              options: ['c', '1', '0', 'x'],
              correctAnswer: 2,
              explanation: 'O constantă nu variază, deci rata ei de schimbare este 0.'
            },
            {
              id: 'p11-3-1-3',
              question: 'Derivata funcției f(x) = sin(x) este:',
              options: ['cos(x)', '-cos(x)', 'sin(x)', '0'],
              correctAnswer: 0,
              explanation: 'Conform tabelului de derivate, (sin x)\' = cos x.'
            },
            {
              id: 'p11-3-1-4',
              question: 'Derivata funcției f(x) = cos(x) este:',
              options: ['sin(x)', '-sin(x)', 'cos(x)', '1'],
              correctAnswer: 1,
              explanation: 'Conform tabelului de derivate, (cos x)\' = -sin x.'
            },
            {
              id: 'p11-3-1-5',
              question: 'Derivata funcției f(x) = e^x este:',
              options: ['e^x', 'x*e^(x-1)', '1', 'ln(x)'],
              correctAnswer: 0,
              explanation: 'Funcția exponențială e^x este singura funcție (nenulă) egală cu propria derivată.'
            },
            {
              id: 'p11-3-1-6',
              question: 'Derivata funcției f(x) = ln(x) este:',
              options: ['e^x', '1/x', 'x', '1'],
              correctAnswer: 1,
              explanation: 'Conform tabelului de derivate, (ln x)\' = 1/x.'
            },
            {
              id: 'p11-3-1-7',
              question: 'Regula de derivare a produsului (f*g)\' este:',
              options: ['f\'*g\'', 'f\'*g + f*g\'', 'f\'*g - f*g\'', 'f*g\''],
              correctAnswer: 1,
              explanation: 'Aceasta este regula lui Leibniz pentru derivarea produsului.'
            },
            {
              id: 'p11-3-1-8',
              question: 'Dacă f\'(x) > 0 pe un interval, atunci funcția f este pe acel interval:',
              options: ['Crescătoare', 'Descrescătoare', 'Constantă', 'Negativă'],
              correctAnswer: 0,
              explanation: 'Semnul derivatei indică monotonia funcției.'
            },
            {
              id: 'p11-3-1-9',
              question: 'Punctele în care derivata este nulă f\'(x) = 0 se numesc puncte:',
              options: ['De inflexiune', 'Critice (sau staționare)', 'De discontinuitate', 'De minim absolut'],
              correctAnswer: 1,
              explanation: 'În aceste puncte tangenta la grafic este orizontală.'
            },
            {
              id: 'p11-3-1-10',
              question: 'Derivata a doua f\'\'(x) oferă informații despre:',
              options: ['Monotonie', 'Convexitate/Concavitate', 'Continuitate', 'Domeniu'],
              correctAnswer: 1,
              explanation: 'Dacă f\'\' > 0 funcția este convexă, dacă f\'\' < 0 funcția este concavă.'
            }
          ]
        }
      ]
    }
  ],
  12: [
    {
      id: '12-structuri',
      title: 'Structuri algebrice',
      lessons: [
        { 
          id: '12-1-1', 
          title: 'Legi de compoziție', 
          content: '# Legi de compoziție\n\nProprietăți: asociativitate, comutativitate, element neutru, elemente simetrizabile.',
          problems: [
            {
              id: 'p12-1-1-1',
              question: 'Dacă x * y = x + y - 2, care este elementul neutru e?',
              options: ['0', '1', '2', '-2'],
              correctAnswer: 2,
              explanation: 'x * e = x => x + e - 2 = x => e = 2.'
            },
            {
              id: 'p12-1-1-2',
              question: 'O lege de compoziție * este comutativă dacă x * y este egal cu:',
              options: ['y * x', 'x', 'y', 'x + y'],
              correctAnswer: 0,
              explanation: 'Comutativitatea înseamnă că ordinea operanzilor nu contează.'
            },
            {
              id: 'p12-1-1-3',
              question: 'Elementul neutru pentru adunarea numerelor reale este:',
              options: ['1', '0', '-1', 'infinit'],
              correctAnswer: 1,
              explanation: 'x + 0 = x pentru orice x.'
            },
            {
              id: 'p12-1-1-4',
              question: 'Elementul neutru pentru înmulțirea numerelor reale este:',
              options: ['1', '0', '-1', 'e'],
              correctAnswer: 0,
              explanation: 'x * 1 = x pentru orice x.'
            },
            {
              id: 'p12-1-1-5',
              question: 'Un element x este simetrizabil dacă există x\' astfel încât x * x\' =:',
              options: ['0', '1', 'e (elementul neutru)', 'x'],
              correctAnswer: 2,
              explanation: 'Compunerea unui element cu simetricul său dă elementul neutru.'
            },
            {
              id: 'p12-1-1-6',
              question: 'Legea x * y = x + y + xy este asociativă pe R?',
              options: ['Da', 'Nu'],
              correctAnswer: 0,
              explanation: 'Se poate verifica prin calcul (x*y)*z = x*(y*z).'
            },
            {
              id: 'p12-1-1-7',
              question: 'În structura (R, +), simetricul lui x este:',
              options: ['1/x', '-x', 'x', '0'],
              correctAnswer: 1,
              explanation: 'x + (-x) = 0 (elementul neutru al adunării).'
            },
            {
              id: 'p12-1-1-8',
              question: 'În structura (R*, *), simetricul lui x este:',
              options: ['1/x', '-x', 'x', '1'],
              correctAnswer: 0,
              explanation: 'x * (1/x) = 1 (elementul neutru al înmulțirii).'
            },
            {
              id: 'p12-1-1-9',
              question: 'O mulțime nevidă G împreună cu o lege de compoziție asociativă, cu element neutru și în care orice element e simetrizabil se numește:',
              options: ['Monoid', 'Grup', 'Inel', 'Corp'],
              correctAnswer: 1,
              explanation: 'Aceasta este definiția grupului.'
            },
            {
              id: 'p12-1-1-10',
              question: 'Dacă x * y = y * x pentru orice x, y, grupul se numește:',
              options: ['Finit', 'Abelian (sau comutativ)', 'Ciclic', 'Inversabil'],
              correctAnswer: 1,
              explanation: 'Grupurile comutative se numesc grupuri abeliene.'
            }
          ]
        }
      ]
    },
    {
      id: '12-integrale',
      title: 'Integrale',
      lessons: [
        { 
          id: '12-2-1', 
          title: 'Primitive', 
          content: '# Primitive\n\nDefiniție și tabelul de primitive uzuale.',
          problems: [
            {
              id: 'p12-2-1-1',
              question: 'O primitivă a funcției f(x) = x este:',
              options: ['1', 'x^2', 'x^2 / 2', '2x'],
              correctAnswer: 2,
              explanation: 'Deoarece (x^2 / 2)\' = x.'
            },
            {
              id: 'p12-2-1-2',
              question: 'Mulțimea tuturor primitivelor unei funcții f se notează cu:',
              options: ['f\'(x)', 'integral din f(x) dx', 'F(x)', 'lim f(x)'],
              correctAnswer: 1,
              explanation: 'Aceasta se numește integrala nedefinită.'
            },
            {
              id: 'p12-2-1-3',
              question: 'Primitiva funcției f(x) = 1 este:',
              options: ['x + C', '1 + C', '0', 'x^2'],
              correctAnswer: 0,
              explanation: 'Derivata lui x este 1.'
            },
            {
              id: 'p12-2-1-4',
              question: 'Primitiva funcției f(x) = e^x este:',
              options: ['e^x + C', 'x*e^x', '1/e^x', 'ln x'],
              correctAnswer: 0,
              explanation: 'e^x este propria sa derivată și primitivă.'
            },
            {
              id: 'p12-2-1-5',
              question: 'Primitiva funcției f(x) = 1/x pe (0, infinit) este:',
              options: ['ln x + C', '-1/x^2', 'x', 'e^x'],
              correctAnswer: 0,
              explanation: 'Derivata lui ln x este 1/x.'
            },
            {
              id: 'p12-2-1-6',
              question: 'Primitiva funcției f(x) = cos x este:',
              options: ['sin x + C', '-sin x + C', 'cos x', 'tg x'],
              correctAnswer: 0,
              explanation: 'Derivata lui sin x este cos x.'
            },
            {
              id: 'p12-2-1-7',
              question: 'Primitiva funcției f(x) = sin x este:',
              options: ['cos x + C', '-cos x + C', 'sin x', '0'],
              correctAnswer: 1,
              explanation: 'Derivata lui -cos x este sin x.'
            },
            {
              id: 'p12-2-1-8',
              question: 'Dacă F este o primitivă a lui f, atunci F\'(x) este:',
              options: ['f(x)', 'f\'(x)', '0', 'C'],
              correctAnswer: 0,
              explanation: 'Aceasta este definiția primitivei.'
            },
            {
              id: 'p12-2-1-9',
              question: 'Orice funcție continuă admite:',
              options: ['Derivate', 'Primitive', 'Limite nule', 'Valori pozitive'],
              correctAnswer: 1,
              explanation: 'Continuitatea este o condiție suficientă pentru existența primitivelor.'
            },
            {
              id: 'p12-2-1-10',
              question: 'Primitiva funcției f(x) = x^n (n != -1) este:',
              options: ['n*x^(n-1)', 'x^(n+1) / (n+1) + C', 'x^n', 'ln x'],
              correctAnswer: 1,
              explanation: 'Regula de integrare a puterilor.'
            }
          ]
        },
        { 
          id: '12-2-2', 
          title: 'Integrala definită', 
          content: '# Integrala Definită\n\nFormula Leibniz-Newton: $\\int_a^b f(x) dx = F(b) - F(a)$.',
          problems: [
            {
              id: 'p12-2-2-1',
              question: 'Calculați integrala de la 0 la 1 din x dx.',
              options: ['1', '0', '0.5', '2'],
              correctAnswer: 2,
              explanation: 'Integrala este [x^2 / 2] de la 0 la 1 = 1/2 - 0 = 0.5.'
            },
            {
              id: 'p12-2-2-2',
              question: 'Formula Leibniz-Newton pentru integrala definită este integral de la a la b din f(x) dx =:',
              options: ['F(b) - F(a)', 'F(a) - F(b)', 'f(b) - f(a)', 'F(b) + F(a)'],
              correctAnswer: 0,
              explanation: 'F este o primitivă a lui f.'
            },
            {
              id: 'p12-2-2-3',
              question: 'Integrala de la a la a din f(x) dx este:',
              options: ['f(a)', '0', '1', '2f(a)'],
              correctAnswer: 1,
              explanation: 'F(a) - F(a) = 0.'
            },
            {
              id: 'p12-2-2-4',
              question: 'Dacă schimbăm limitele de integrare (de la b la a în loc de a la b), valoarea integralei:',
              options: ['Rămâne aceeași', 'Își schimbă semnul', 'Devine zero', 'Se dublează'],
              correctAnswer: 1,
              explanation: 'Integral de la b la a = - (Integral de la a la b).'
            },
            {
              id: 'p12-2-2-5',
              question: 'Calculați integrala de la 0 la pi din sin x dx.',
              options: ['0', '1', '2', '-1'],
              correctAnswer: 2,
              explanation: '[-cos x] de la 0 la pi = -cos(pi) - (-cos(0)) = -(-1) + 1 = 2.'
            },
            {
              id: 'p12-2-2-6',
              question: 'Integrala definită reprezintă geometric:',
              options: ['Lungimea unei curbe', 'Aria de sub grafic', 'Volumul unei sfere', 'Panta tangentei'],
              correctAnswer: 1,
              explanation: 'Pentru funcții pozitive, integrala este aria suprafeței dintre grafic și axa Ox.'
            },
            {
              id: 'p12-2-2-7',
              question: 'Calculați integrala de la 1 la e din 1/x dx.',
              options: ['1', 'e', '0', 'ln 2'],
              correctAnswer: 0,
              explanation: '[ln x] de la 1 la e = ln e - ln 1 = 1 - 0 = 1.'
            },
            {
              id: 'p12-2-2-8',
              question: 'Metoda de integrare prin părți pentru integrala definită este:',
              options: ['uv - integral v du', '[uv] - integral v du', 'u\'v + uv\'', 'f(g(x))'],
              correctAnswer: 1,
              explanation: 'Se aplică formula de la a la b.'
            },
            {
              id: 'p12-2-2-9',
              question: 'Dacă f este o funcție impară, atunci integrala de la -a la a din f(x) dx este:',
              options: ['2 * integral de la 0 la a', '0', '1', 'f(a)'],
              correctAnswer: 1,
              explanation: 'Aria de sub axă o anulează pe cea de deasupra axei.'
            },
            {
              id: 'p12-2-2-10',
              question: 'Calculați integrala de la 0 la 1 din e^x dx.',
              options: ['e', 'e - 1', '1', '0'],
              correctAnswer: 1,
              explanation: '[e^x] de la 0 la 1 = e^1 - e^0 = e - 1.'
            }
          ]
        }
      ]
    }
  ]
};
