<template>
  <div>
    {{ msg }}
    <form>
      <button @click="addMember()">ADD MEMBER</button>
      <button @click="removeMembers()">DELETE CHECKED MEMBERS</button>
      <p><button @click="present()">🎁EXCHANGE GIFT🎁</button></p>
      <p>name: <input type="text" v-model="newMember"></p>
    </form>
    <div class="member-list">
      <label class="member-list__item" v-for="member in members" v-bind:class="{ 'member-list__item-checked': member.select }"
        :key="member.text">
        <input type="checkbox" v-model="member.select">
        <input type="checkbox" v-model="member.editting">
        <input v-if="member.editting" v-model="member.text" @keyup.enter="member.editting = !member.editting">
        <span v-else>{{ member.text }}</span>
        <span v-if="member.presentTo">  -> {{ member.presentTo }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exchange_gift',
  data () {
    return {
      msg: 'Welcome to Gift Exchange App🎉',
      members: [
        { text: `hoge`, select: false, editting: false, presentTo: null, },
        { text: `fuga`, select: false, editting: false, presentTo: null, },
        { text: `piyo`, select: false, editting: false, presentTo: null, },
      ],
      newMember: "",
    }
  },
  methods: {
    addMember: function() {
      const text = this.newMember && this.newMember.trim();
      if (!text) return;
      this.members.push({
        text: text,
        select: false,
      });
      this.newMember = "";
    },
    removeMembers: function() {
      for (let i=this.members.length-1; i>=0; i--) {
        if (this.members[i].select) this.members.splice(i, 1);
      }
    },
    present: function() {
      const presentMap = exchangePresents(this.members.map(t => t.text));
      this.members = this.members.map(t => {
        t.presentTo = presentMap[t.text];
        return t;
      });
    },
  }
}

/**
 * プレゼントする人: もらう人を{key: value, ...}にして返す
 * 自分のプレゼントは自分には渡らないようにする
 * サットロのアルゴリズムを利用する
 * @param {Array} arr arrに重複したデータは入っていないものとする
 */
function exchangePresents(arr) {
  const randomArr = arr.slice();
  for (let i=randomArr.length; i-- > 1;) {
    const j = ~~(Math.random() * i);
    [randomArr[j], randomArr[i]] = [randomArr[i], randomArr[j]];
  }
  return arr.reduce((a, x) => {
    a[x] = randomArr.shift();
    return a ;
  }, {});
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin flex-vendor() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.member-list {
  @include flex-vendor;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &-checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>
