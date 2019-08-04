<template>
  <div class="payment">
    <v-subheader>Payment Information</v-subheader>
    <v-card flat>
    <v-container v-if="payment">
      <v-simple-table>
        <tr><th>Order ID</th><td>{{ payment.order_id }}</td></tr>
        <tr><th>Invoice Number</th><td>{{ payment.invoice_number }}</td></tr>
        <tr><th>Total Bill</th><td>Rp. {{ payment.total_bill.toLocaleString('id-ID') }}</td></tr>
      </v-simple-table>
    </v-container>
    </v-card>

    <v-subheader>Transfer To</v-subheader>
    <v-card flat>
    <v-container>
      <v-simple-table>
        <tr>
            <td><img src="img/bca.png"></td>
            <td>BCA KCP abc No Rek 123</td>
        </tr>
        <tr>
            <td><img src="img/mandiri.png"></td>
            <td>BANK MANDIRI KCP xyz No Rek 456</td>
        </tr>
      </v-simple-table>
    </v-container>
    </v-card>

    <v-subheader></v-subheader>
    <v-card>
    <v-container>
    <v-layout row wrap>
      <v-flex xs12 text-center>
      <v-btn color="success" @click="finish">
          Finish
      </v-btn>
      </v-flex>
    </v-layout>
    </v-container>
    </v-card>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        payment  : 'payment',
      }),
    },
    created(){
        if(this.payment==undefined){
            this.setAlert({
                status : true,
                text  : 'Payment undefined',
                color  : 'warning',
            })
            this.$router.push('/')
        }
    },
    methods: {
        ...mapActions({
            setAlert      : 'alert/set',
        }),
        finish(){
            this.setAlert({
                status : true,
                text  : 'Transaction done',
                color  : 'success',
            })
            this.$router.push('/')
        }
    },
  }
</script>