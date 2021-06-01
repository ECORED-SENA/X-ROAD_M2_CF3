<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Escenario de Interoperabilidad
    
    .titulo-segundo
      .h4 Contexto
    
    .row.justify-content-center.mb-5
      .col-md-5.d-flex
        div
          figure.mb-4
            img(src='@/assets/curso/img1_01.png', alt='La pandemia')
          .bgPrimario.p-4
            h5  La pandemia
            p Como consecuencia de la pandemia mundial en el año 2020, las autoridades han puesto sus esfuerzos en fomentar el distanciamiento social, facilitando la realización de algunos trámites presenciales, de forma virtual, apoyándose en sistemas de información que se comunican con otros sistemas y con los ciudadanos, a través de Internet.
      .col-md-5.d-flex
        div
          figure.mb-4
            img(src='@/assets/curso/img1_02.png', alt='Departamento de tecnología')
          .bgAContenido.p-4
            h5  Departamento de tecnología
            p 
            | Con base en lo anterior, una de las entidades, a quien llamaremos 
            strong Departamento de Tecnología
            | , ha sido encargada de diseñar y construir un sistema de información que facilite el trámite de 
            strong expedición de licencias de conducción.
            | Este sistema debe interactuar con sistemas de otros departamentos, obteniendo información, creando registros y completando los pasos estipulados por las autoridades, con el fin de otorgar una nueva licencia de conducción a un ciudadano.
    
    #t_1_1.titulo-segundo
      .h4 1.1 Descripción
    
    .row.justify-content-center.mb-5
      .col-8.col-md-5
        figure.mb-4
          img(src='@/assets/curso/img1_03.svg', alt='Descripción')
      .col-md-7
        h4.mb-4 Escenario de interoperabilidad
        p.mb-4 
          | El proceso de intercambiar información entre diferentes sistemas de información (independientemente de la tecnología usada para su desarrollo, almacenamiento o distribución) conforma un 
          strong escenario de interoperabilidad; 
          | que en este caso, tiene como fin, soportar el trámite de obtención de una licencia de conducción.
        h4.mb-4 Flujo de información
        p.mb-4 
          | Este proceso involucra diversos actores que proveen y/o requieren información en un flujo definido, el cual está basado en el 
          a.fw-bold(href='https://www.simbogota.com.co/index.php/homepage/tramites/rdc-registro-distrital-de-conductores/licencia-de-conduccion/' target="_blank") trámite real
          | , pero que en este escenario ha sido modificado para reducir la complejidad, tanto en el flujo de información, como en los componentes de software, y de esta manera, poder centrar los esfuerzos en el entendimiento y la implementación el ecosistema 
          strong X-Road.

    #t_1_2.titulo-segundo
      .h4 1.2 Actores
    
    .tabla-a.color-secundario
      table
        thead
          tr
            th Actor
            th Nombre del sistema de informaci&oacute;n asociado
            th Responsabilidad
        tbody
          tr
            td Departamento de Tecnolog&iacute;a
            td tecnolog&iacute;a_si
            td Obtener y crear registros para otorgar una nueva licencia a un ciudadano, a trav&eacute;s de X-Road
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
            td tr&aacute;nsito_si
            td Almacenar y permitir la creaci&oacute;n de registros &uacute;nicos de ciudadanos.
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
            td xroad
            td Establecer y permitir la interoperabilidad entre los diferentes sistemas de informaci&oacute;n involucrados.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
