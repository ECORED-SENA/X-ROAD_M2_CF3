<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Escenario Básico de Interoperabilidad

    figure.mb-5
      img(src='@/assets/curso/img2_03.png', alt='Escenario Básico de Interoperabilidad')
    
    #t_2_1.titulo-segundo
      .h4 2.1 Actores
    
    .tabla-a.color-.mb-5
      table
        thead
          tr
            th Actor
            th Nombre del sistema de informaci&oacute;n asociado
            th Responsabilidad
        tbody
          tr
            td Departamento de Tecnolog&iacute;a
            td.bgPrimario tecnolog&iacute;a_si
            td.bgPrimario Obtener y crear registros para otorgar una nueva licencia a un ciudadano, a trav&eacute;s de X-Road.
          tr
            td Departamento de Ciudadan&iacute;a
            td ciudadan&iacute;a_si
            td Almacenar los datos personales de los ciudadanos.
          tr
            td Departamento de Transporte
            td transporte_si
            td Almacenar la informaci&oacute;n sobre antecedentes de suspensiones y cancelaciones de licencias de conducci&oacute;n.
          tr
            td Departamento de Tr&aacute;nsito
            td.bgPrimario tr&aacute;nsito_si
            td.bgPrimario Almacenar y permitir la creaci&oacute;n de registros &uacute;nicos de ciudadanos.
          tr
            td Departamento de Ense&ntilde;anza
            td ense&ntilde;anza_si
            td Almacenar informaci&oacute;n sobre ex&aacute;menes de conducci&oacute;n aplicados a los ciudadanos.
          tr
            td Departamento de Movilidad
            td movilidad_si
            td Almacenar y permitir la creaci&oacute;n de registros de licencias de conducci&oacute;n.
          tr
            td X-Road
            td.bgPrimario xroad
            td.bgPrimario Establecer y permitir la interoperabilidad entre los diferentes sistemas de informaci&oacute;n involucrados.
    
    #t_2_2.titulo-segundo
      .h4 2.2 Descripción
    
    .row.justify-content-center.mb-5
      .col-md-10
        p.mb-4
          | El sistema de información del 
          strong Departamento de Tecnología 
          | debe consultar en el sistema de información del 
          strong Departamento de Tránsito
          | , si un ciudadano posee un registro asociado.
        p.mb-4 Consideraciones:
        
      .col-lg-5
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img2_01.svg' alt='Identificación del ciudadano')
          .tarjeta.bgAContenido
            .p-4
              .h5 Identificación del ciudadano
              p
                |La identificación del ciudadano se realiza por medio de su 
                strong tipo de documento y número de documento.

      .col-lg-5
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img2_02.svg' alt='Intercambio por medio de X-Road')
          .tarjeta.bgAContenido
            .p-4
              .h5 Intercambio por medio de X-Road
              p
                |El intercambio de información debe realizarse a través del ecosistema 
                strong X-Road.
  
    #t_2_3.titulo-segundo
        .h4 2.3 Ejecución Práctica del Escenario

    .bgPrimario.p-5.mb-5
      .row.justify-content-center
        .col-lg-7.mb-4.mb-lg-0
          p.mb-4
            strong Importante: 
            |  esta actividad debe realizarse con el 
            strong Equipo de trabajo 
            | ya establecido. Para desarrollar la actividad se debe descargar los cuatro (4) documentos presentes en cada uno de los pasos del ejercicio.s

          p.mb-5
            strong Recurso importante: AWS Educate. 
            | Para activar los recuros se debe descargar esta guía:

          .col-7   
            a.anexo.btn-white(:href="obtenerLink('/downloads/2.3.Anexo-1.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p
                  strong Anexo 1. 
                  | AWS Educate.

        .col-8.col-lg-5
          figure.mb-4
            img(src='@/assets/curso/img2_03.svg', alt='Ejecución Práctica del Escenario')
    
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img2_04.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="26%" y="14%")
        a.anexo(:href="obtenerLink('/downloads/2.3.Anexo-2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.text-dark
              strong.text-dark Anexo 2. 
              | Descripción Detallada del Escenario.

      .tarjeta.color-acento-botones.p-3(x="77.5%" y="14%")
        a.anexo(:href="obtenerLink('/downloads/2.3.Anexo-3.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.text-dark
              strong.text-dark Anexo 3. 
              | Guía de Implementación del escenario.

      .tarjeta.color-acento-botones.p-3(x="45%" y="76%")
        a.anexo(:href="obtenerLink('/downloads/2.3.Anexo-4.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.text-dark
              strong.text-dark Anexo 4. 
              | Guía de Instalación de Docker.
      
      .tarjeta.color-acento-botones.p-3(x="86.2%" y="76%")
        a.anexo(:href="obtenerLink('/downloads/2.3.Anexo-5.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.text-dark
              strong.text-dark Anexo 5. 
              | Guía de Instalación de X-Road.

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
