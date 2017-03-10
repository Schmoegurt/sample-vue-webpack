<template>
  <div>
    <h3 class='f6 ttu tracked mt0'>Bar</h3>
    <p class='f4 lh-copy measure'>{{ message }}</p>
  </div>
</template>

<script>
module.exports = {
  name: 'Bar',
  data: function() {
    return {
      message: ''
    };
  },
  created: function() {
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL);
    xhr.onload = function() {
      self.message = JSON.parse(xhr.responseText).data;
    }
    xhr.send();
  }
};
</script>
