<template>
  <div class="about">
    <h1>This is an about page</h1>

    <v-simple-table style="margin:20px;">
    <tbody>
      <tr>
        <td class="text-center" style="border:1px solid #ddd;padding:10px; background:#eee;">
          v-app
          <v-simple-table style="margin:5px;">
          <tbody>
            <tr>
              <td style="border:1px solid #ddd;" colspan=2 class="text-center">v-app-bar (Header)</td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd; width:40%">
                v-navigation-drawer (Side Menu)
              </td>
              <td style="border:1px solid #ddd;">
                v-content (Main Content)
              </td>
            </tr>
            <tr>
              <td style="border:1px solid #ddd;" colspan=2 class="text-center">v-footer (Footer)</td>
            </tr>
          </tbody>
        </v-simple-table>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
  </div>
</template>
