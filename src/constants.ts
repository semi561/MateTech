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
          content: '# Mulțimea numerelor reale\n\nNumerele reale ($\mathbb{R}$) includ numerele raționale și iraționale.\n\n### Proprietăți:\n- Comutativitate: $a + b = b + a$\n- Asociativitate: $(a + b) + c = a + (b + c)$\n- Element neutru: $0$ pentru adunare, $1$ pentru înmulțire.',
          problems: [
            {
              id: 'p9-1-1-1',
              question: 'Care dintre următoarele numere este irațional?',
              options: ['$\frac{1}{2}$', '$\sqrt{2}$', '$0.75$', '$-5$'],
              correctAnswer: 1,
              explanation: '$\sqrt{2}$ nu poate fi scris sub formă de fracție de numere întregi, deci este irațional.'
            },
            {
              id: 'p9-1-1-2',
              question: 'Rezultatul calculului $|-5| + |3|$ este:',
              options: ['$-2$', '$2$', '$8$', '$-8$'],
              correctAnswer: 2,
              explanation: '$|-5| = 5$ și $|3| = 3$, deci $5 + 3 = 8$.'
            }
          ]
        },
        { 
          id: '9-1-2', 
          title: 'Propoziții și predicate', 
          content: '# Logică Matematică\n\nO propoziție este un enunț care poate fi adevărat (A) sau fals (F).\n\n### Operatori logici:\n- Negația ($\neg$)\n- Conjuncția ($\land$)\n- Disjuncția ($\lor$)\n- Implicația ($\rightarrow$)\n- Echivalența ($\leftrightarrow$)',
          problems: [
            {
              id: 'p9-1-2-1',
              question: 'Valoarea de adevăr a propoziției "2 + 2 = 5" este:',
              options: ['Adevărat', 'Fals'],
              correctAnswer: 1,
              explanation: 'Deoarece 2 + 2 = 4, propoziția este falsă.'
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
          content: '# Noțiunea de funcție\n\nO funcție $f: A \rightarrow B$ este o lege care asociază fiecărui element din $A$ un singur element din $B$.',
          problems: [
            {
              id: 'p9-2-1-1',
              question: 'Dacă $f(x) = 2x + 1$, cât este $f(3)$?',
              options: ['5', '6', '7', '8'],
              correctAnswer: 2,
              explanation: '$f(3) = 2(3) + 1 = 6 + 1 = 7$.'
            }
          ]
        },
        { 
          id: '9-2-2', 
          title: 'Funcția de gradul I', 
          content: '# Funcția de gradul I\n\nForma generală: $f(x) = ax + b, a \neq 0$.\n\n- Graficul este o dreaptă.\n- Intersecția cu Ox: $x = -b/a$.\n- Intersecția cu Oy: $f(0) = b$.',
          problems: [
            {
              id: 'p9-2-2-1',
              question: 'Panta dreptei $f(x) = -3x + 4$ este:',
              options: ['4', '3', '-3', '1'],
              correctAnswer: 2,
              explanation: 'În forma $f(x) = ax + b$, panta este coeficientul $a$, deci -3.'
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
          content: '# Ecuația de gradul II\n\n$ax^2 + bx + c = 0$\n\n$\Delta = b^2 - 4ac$\n\n- Dacă $\Delta > 0$, două rădăcini reale distincte.\n- Dacă $\Delta = 0$, o rădăcină reală dublă.\n- Dacă $\Delta < 0$, nicio rădăcină reală.',
          problems: [
            {
              id: 'p9-3-1-1',
              question: 'Calculați $\Delta$ pentru ecuația $x^2 - 5x + 6 = 0$.',
              options: ['1', '25', '24', '0'],
              correctAnswer: 0,
              explanation: '$\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1$.'
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
          content: '# Radicali\n\n$\sqrt[n]{a} = b \iff b^n = a$.\n\n### Proprietăți:\n1. $\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{ab}$\n2. $\frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}}$\n3. $(\sqrt[n]{a})^m = \sqrt[n]{a^m}$',
          problems: [
            {
              id: 'p10-1-1-1',
              question: 'Calculați $\sqrt[3]{27}$.',
              options: ['2', '3', '9', '27'],
              correctAnswer: 1,
              explanation: '$3^3 = 27$, deci $\sqrt[3]{27} = 3$.'
            }
          ]
        },
        { 
          id: '10-1-2', 
          title: 'Logaritmi', 
          content: '# Logaritmi\n\n$\\log_a b = x \\iff a^x = b$.\n\nCondiții: $a > 0, a \\neq 1, b > 0$.\n\n### Formule fundamentale:\n- $\\log_a (xy) = \\log_a x + \\log_a y$\n- $\\log_a (x/y) = \\log_a x - \\log_a y$\n- $\\log_a x^n = n \\log_a x$',
          problems: [
            {
              id: 'p10-1-2-1',
              question: 'Calculați $\\log_2 8$.',
              options: ['2', '3', '4', '16'],
              correctAnswer: 1,
              explanation: '$2^3 = 8$, deci $\\log_2 8 = 3$.'
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
          content: '# Numere Complexe\n\n$z = a + bi$, unde $i^2 = -1$.\n\n- $a$ este partea reală ($Re(z)$)\n- $b$ este partea imaginară ($Im(z)$)\n- Modulul: $|z| = \sqrt{a^2 + b^2}$',
          problems: [
            {
              id: 'p10-2-1-1',
              question: 'Care este partea imaginară a numărului $z = 3 - 4i$?',
              options: ['3', '4', '-4', '-4i'],
              correctAnswer: 2,
              explanation: 'Partea imaginară este coeficientul lui $i$, adică -4.'
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
          content: '# Combinatorică\n\n- **Permutări**: $P_n = n!$\n- **Aranjamente**: $A_n^k = \frac{n!}{(n-k)!}$\n- **Combinări**: $C_n^k = \frac{n!}{k!(n-k)!}$',
          problems: [
            {
              id: 'p10-3-1-1',
              question: 'Calculați $P_3$.',
              options: ['3', '6', '9', '1'],
              correctAnswer: 1,
              explanation: '$P_3 = 3! = 3 \times 2 \times 1 = 6$.'
            }
          ]
        },
        { 
          id: '10-3-2', 
          title: 'Probabilități', 
          content: '# Probabilități\n\n$P = \frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}}$',
          problems: [
            {
              id: 'p10-3-2-1',
              question: 'Într-o urnă sunt 5 bile albe și 3 bile negre. Probabilitatea de a extrage o bilă neagră este:',
              options: ['$\frac{3}{5}$', '$\frac{5}{8}$', '$\frac{3}{8}$', '$\frac{1}{2}$'],
              correctAnswer: 2,
              explanation: 'Nr. cazuri favorabile = 3 (bile negre), Nr. cazuri posibile = 5 + 3 = 8. Probabilitatea este $\frac{3}{8}$.'
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
              question: 'Calculați $\begin{vmatrix} 2 & 3 \\ 1 & 5 \end{vmatrix}$.',
              options: ['7', '13', '10', '3'],
              correctAnswer: 0,
              explanation: '$2 \times 5 - 3 \times 1 = 10 - 3 = 7$.'
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
              question: 'O matrice $A$ este inversabilă dacă și numai dacă:',
              options: ['$\det A = 0$', '$\det A \neq 0$', '$A$ este matrice nulă', '$A$ este matrice unitate'],
              correctAnswer: 1,
              explanation: 'Condiția de inversabilitate este ca determinantul să fie nenul.'
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
              question: 'Calculați $\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 3}$.',
              options: ['0', '1', '2', '$\\infty$'],
              correctAnswer: 2,
              explanation: 'Gradul numărătorului este egal cu cel al numitorului, deci limita este raportul coeficienților dominanți: $2/1 = 2$.'
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
              question: 'Dacă $\lim_{x \to 2} f(x) = 5$ și $f(2) = 5$, funcția este continuă în $x=2$?',
              options: ['Da', 'Nu'],
              correctAnswer: 0,
              explanation: 'Deoarece limita este egală cu valoarea funcției, aceasta este continuă.'
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
              question: 'Derivata funcției $f(x) = x^2$ este:',
              options: ['$x$', '$2x$', '$2$', '$x^3$'],
              correctAnswer: 1,
              explanation: 'Folosind regula $(x^n)\' = nx^{n-1}$, avem $(x^2)\' = 2x$.'
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
              question: 'Dacă $x * y = x + y - 2$, care este elementul neutru $e$?',
              options: ['0', '1', '2', '-2'],
              correctAnswer: 2,
              explanation: '$x * e = x \implies x + e - 2 = x \implies e = 2$.'
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
              question: 'O primitivă a funcției $f(x) = x$ este:',
              options: ['$1$', '$x^2$', '$\frac{x^2}{2}$', '$2x$'],
              correctAnswer: 2,
              explanation: 'Deoarece $(\frac{x^2}{2})\' = x$.'
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
              question: 'Calculați $\\int_0^1 x dx$.',
              options: ['1', '0', '0.5', '2'],
              correctAnswer: 2,
              explanation: '$\\int_0^1 x dx = [\\frac{x^2}{2}]_0^1 = \\frac{1}{2} - 0 = 0.5$.'
            }
          ]
        }
      ]
    }
  ]
};
