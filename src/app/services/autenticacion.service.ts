import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
// @Injectable:
// Este decorador marca la clase como un servicio que puede ser inyectado como dependencia en otros componentes o servicios de Angular.
// providedIn: 'root'
// - El servicio es un singleton, una única instancia durante el ciclo de vida de la aplicación.
// - Se crea cuando la aplicación inicia
// - Está disponible en TODOS los módulos y componentes sin necesidad de declararlo en providers
// - Angular maneja automáticamente su ciclo de vida
@Injectable({
 providedIn: 'root'
})
export class AutenticacionService {
 private usuarios: Usuario[] = [
 {
 id: 1,
 nombre: 'Juan',
 apellido: 'Pérez',
 email: 'juan.perez@email.com',
 nombreUsuario: 'juanperez',
 contraseña: '1111'
 },
 {
 id: 2,
 nombre: 'María',
 apellido: 'Gómez',
 email: 'maria.gomez@email.com',
 nombreUsuario: 'mariagomez',
 contraseña: '2222'
 },
 {
 id: 3,
 nombre: 'Carlos',
 apellido: 'López',
 email: 'carlos.lopez@email.com',
 nombreUsuario: 'carloslopez',
 contraseña: '3333'
 }
 ];
 // Este método recibe las credenciales y verifica si son correctas
 validarCredenciales(nombreUsuario: string, contraseña: string):
boolean {
 // Buscamos un usuario que coincida con:
 // - nombreUsuario (case-sensitive)
 // - contraseña (case-sensitive)
 const usuario = this.usuarios.find(u =>
 u.nombreUsuario === nombreUsuario && u.contraseña === contraseña
 );
 // El doble '!!' convierte cualquier valor a booleano:
 // - Si 'usuario' es undefined (no encontrado) → !!undefined =
false
 // - Si 'usuario' es un objeto (encontrado) → !!objeto = true
 // Es una forma concise de convertir el resultado a boolean
 return !!usuario;
 }
 // Útil para debugging o para mostrar lista de usuarios (en desarrollo)
 // Devuelve un array completo con todos los usuarios registrados
 obtenerUsuarios(): Usuario[] {
 return this.usuarios;
 }
 // Útil para verificar si un usuario ya existe antes de registrar uno nuevo
 // Devuelve el objeto Usuario completo si existe, undefined si no existe
 obtenerUsuarioPorNombreUsuario(nombreUsuario: string): Usuario |
undefined {
 return this.usuarios.find(u => u.nombreUsuario === nombreUsuario);
 }
}
