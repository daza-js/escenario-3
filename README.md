# Encuentra el Número Mayor

Esta es una aplicación simple en JavaScript que permite al usuario ingresar tres números enteros positivos y determinar cuál de ellos es el mayor.

## Descripción

La aplicación permite a los usuarios ingresar tres números enteros positivos y, utilizando operaciones matemáticas simples, determina cuál es el número mayor entre ellos.  
La validación asegura que los números ingresados sean positivos. Si no se cumple esta condición, se muestra un mensaje de error.

## Uso

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa tres números enteros positivos en los campos correspondientes.
3. Haz clic en el botón "Calcular Mayor".
4. El resultado aparecerá en pantalla, indicando el número mayor.

### Validación de Entradas

- Si ingresas un número no válido (negativo o no entero), se mostrará un mensaje indicando que todos los números deben ser positivos.

## Casos de Uso

### Caso de Uso 1: Cálculo simple

**Entrada**:

- Primer número: `10`
- Segundo número: `25`
- Tercer número: `7`

**Salida**:  
`El número mayor es: 25`

---

### Caso de Uso 2: Todos los números iguales

**Entrada**:

- Primer número: `15`
- Segundo número: `15`
- Tercer número: `15`

**Salida**:  
`El número mayor es: 15`

---

### Caso de Uso 3: Validación de números negativos

**Entrada**:

- Primer número: `-5`
- Segundo número: `20`
- Tercer número: `30`

**Salida**:  
`Todos los números deben ser enteros positivos.`

---

### Caso de Uso 4: Validación de cero

**Entrada**:

- Primer número: `0`
- Segundo número: `10`
- Tercer número: `20`

**Salida**:  
`Todos los números deben ser enteros positivos.`
