/**
 * Componente para iniciar sesion 
 * @author Andrei, Jorge y Sergio
 * @version 1.0
 */
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from '@angular/router';
// DECORADOR @Component: Define esta clase como un componente Angular
// - selector: 'app-seccion-usuario' → Cómo se usará en HTML: <app-seccionusuario>
// - standalone: true → Componente independiente que no necesita NgModule
// - imports: [CommonModule] → Importa directivas comunes como *ngIf, *ngFor
// - templateUrl/styleUrl → Ruta al HTML y CSS del componente
@Component({
 selector: 'app-seccion-usuario',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './seccion-usuario.html',
 styleUrl: './seccion-usuario.css'
})
export class SeccionUsuario implements AfterViewInit {
 // Inyección de dependencias: Angular provee automáticamente el servicio
 // private: Solo accesible dentro de esta clase
 // autenticacionService: Instancia del servicio inyectada
 constructor(private autenticacionService: AutenticacionService,
    private router : Router
 ) {}
 // Ciclo de vida: ngAfterViewInit()
 // Se ejecuta después de que la vista del componente se ha renderizado completamente
 // Es el momento SEGURO para manipular el DOM porque todos los elementos ya existen
 ngAfterViewInit(): void {
 this.setupTabs(); // Configura el sistema de pestañas
 this.setupLogin(); // Configura los eventos del formulario de login
 this.setupRegistro()
 }
 // Configuración del sistema de pestañas
 private setupTabs(): void {
 // Obtiene todos los botones de pestaña (Login y Registro)
 const tabButtons = document.querySelectorAll('.tab-button');
 // Obtiene todos los formularios (loginForm y registerForm)
 const forms = document.querySelectorAll('.login-form');
 // Para cada botón de pestaña, agrega un evento click
 tabButtons.forEach(button => {
 button.addEventListener('click', () => {
 // 1º: Desactivar todos los botones (remover a 'active')
 tabButtons.forEach(btn => btn.classList.remove('active'));
 // 2º: Ocultar todos los formularios (remover a 'active')
 forms.forEach(form => form.classList.remove('active'));
 // 3º: Activar el botón clickeado
 button.classList.add('active');
 // 4º: Identificar el formulario mostrar
 // data-tab="login" → "loginForm"
 // data-tab="register" → "registerForm"
 //Lee el valor del atributo HTML data-tab del botón clickeado
 const tabName = button.getAttribute('data-tab');
 // Obtiene el formulario a través del tbName
 const formToShow = document.getElementById(tabName + 'Form');
 // 5º: Mostrar el formulario correspondiente
 // Conversion implicita. Muy guay hasta que deja de serlo
 if (formToShow) {
 formToShow.classList.add('active');
 }
 // Limpiar mensajes al cambiar de pestaña
 this.limpiarMensaje();
 });
 });
 }
 // Configuramos el botón de login
 private setupLogin(): void {
 // Obtener el botón de login por su ID
 const btnLogin = document.getElementById('btnLogin');
 // Configurar evento click en el botón de login
 if (btnLogin) {
 btnLogin.addEventListener('click', () => {
 this.validarLogin(); // Ejecutar validación cuando se hace click
 });
 }
 }
 private validarLogin(): void {
 // Obtener referencias a los campos de input
 // Con as HTMLInputElement TS puede acceder a propiedades específicas de input
 // Sin as HTMLInputElement TS solo puede acceder a propiedades genéricas
 const usuarioInput = document.getElementById('loginUsuario') as
HTMLInputElement;
 const contraseñaInput = document.getElementById('loginClave') as
HTMLInputElement;
 // Validación de seguridad: si no existen los elementos, salir
 if (!usuarioInput || !contraseñaInput) {
 return;
 }
 // Obtener y limpiar los valores (trim() remueve espacios en blanco)
 const nombreUsuario = usuarioInput.value.trim();
 const contraseña = contraseñaInput.value.trim();
 // Validación 1: Campos vacíos
 if (!nombreUsuario || !contraseña) {
 this.mostrarMensaje('Vamos, completa todos los campos', false);
 return;
 }
 // Validación 2: Usar el servicio para verificar credenciales
 const esValido =
this.autenticacionService.validarCredenciales(nombreUsuario, contraseña);
 if (esValido) {
 // Si el login es exitoso
 this.mostrarMensaje('Validación correcta', true);
  setTimeout(() => {
    this.router.navigate(['/panel']);
  }, 1000);
 // Limpiar campos por seguridad después de login exitoso
 usuarioInput.value = '';
 contraseñaInput.value = '';
 } else {
 // CREDENCIALES INVÁLIDAS
 this.mostrarMensaje('Validación incorrecta - Usuario o contraseñainválidos', false);
 }
 }
 // MOSTRAR MENSAJES DE FEEDBACK AL USUARIO
 private mostrarMensaje(texto: string, esExitoso: boolean): void {
 const mensajeDiv = document.getElementById('mensajeValidacion');
 if (mensajeDiv) {
 // Establecer el texto del mensaje
 mensajeDiv.textContent = texto;
 // Hacer visible el mensaje
 mensajeDiv.style.display = 'block';
 // APLICAR ESTILOS SEGÚN EL TIPO DE MENSAJE:
 // - Éxito: fondo verde, texto verde
 // - Error: fondo rojo, texto rojo
 if (esExitoso) {
 mensajeDiv.className = 'mensaje-validacion mensaje-exito';
 } else {
 mensajeDiv.className = 'mensaje-validacion mensaje-error';
 }
 // AUTO-OCULTAR: El mensaje desaparece automáticamente después de 5 segundos
 // Esto mejora la experiencia de usuario evitando mensajes persistentes
 setTimeout(() => {
 this.limpiarMensaje();
 }, 5000);
 }
 }
 // LIMPIAR MENSAJES DEL DOM
 private limpiarMensaje(): void {
 const mensajeDiv = document.getElementById('mensajeValidacion');
 if (mensajeDiv) {
 // Ocultar el mensaje y limpiar su contenido
 mensajeDiv.style.display = 'none';
 mensajeDiv.textContent = '';
 }
 }
 private setupRegistro(): void {
  const registerForm = document.getElementById('registerForm') as HTMLFormElement;
  if (!registerForm) return;

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se recargue la página
    this.registrarUsuario();
  });
}

private registrarUsuario(): void {
  // Obtener inputs del formulario
  const nombreInput = document.getElementById('regNombre') as HTMLInputElement;
  const apellidoInput = document.getElementById('regApellido') as HTMLInputElement;
  const emailInput = document.getElementById('regEmail') as HTMLInputElement;
  const usuarioInput = document.getElementById('regUsuario') as HTMLInputElement;
  const claveInput = document.getElementById('regClave') as HTMLInputElement;
  const confirmarClaveInput = document.getElementById('regConfirmarClave') as HTMLInputElement;

  // Validar que existan todos los inputs
  if (!nombreInput || !apellidoInput || !emailInput || !usuarioInput || !claveInput || !confirmarClaveInput) return;

  const nombre = nombreInput.value.trim();
  const apellido = apellidoInput.value.trim();
  const email = emailInput.value.trim();
  const nombreUsuario = usuarioInput.value.trim();
  const contraseña = claveInput.value.trim();
  const confirmarContraseña = confirmarClaveInput.value.trim();

  // 1. Campos vacíos
  if (!nombre || !apellido || !email || !nombreUsuario || !contraseña || !confirmarContraseña) {
    this.mostrarMensaje('Completa todos los campos', false);
    return;
  }

  // 2. Contraseñas iguales
  if (contraseña !== confirmarContraseña) {
    this.mostrarMensaje('Las contraseñas no coinciden', false);
    return;
  }

  // 3. Usuario o email ya existe
  const usuarioExistente = this.autenticacionService.obtenerUsuarioPorNombreUsuario(nombreUsuario);
  if (usuarioExistente) {
    this.mostrarMensaje('El usuario ya existe', false);
    return;
  }

  // 4. Guardar usuario en el servicio
  const nuevoUsuario = {
    id: this.autenticacionService.obtenerUsuarios().length + 1,
    nombre,
    apellido,
    email,
    nombreUsuario,
    contraseña
  };

  this.autenticacionService.obtenerUsuarios().push(nuevoUsuario);

  // 5. Mensaje éxito y limpiar formulario
  this.mostrarMensaje('Registro exitoso, ya puedes iniciar sesión', true);

  nombreInput.value = '';
  apellidoInput.value = '';
  emailInput.value = '';
  usuarioInput.value = '';
  claveInput.value = '';
  confirmarClaveInput.value = '';

  // Opcional: cambiar automáticamente a pestaña de login
  const loginTab = document.querySelector('.tab-button[data-tab="login"]') as HTMLElement;
  if (loginTab) loginTab.click();
}


}
