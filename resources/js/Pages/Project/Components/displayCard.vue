<template>
    <div :class="['display-card', renderPosition?'render-right' : '' ] ">
        <div class="header-section">
            <h5>{{ progressItem.year }}</h5>
            <div class="linker"></div>
        </div>
        <div class="wrapper mb-[20px]" v-for="content in progressItem.contents">
            <div class="text-body-clause mb-[10px]">
                <h4>{{ content.title }}</h4>
                <p>{{ content.description }}</p>
            </div>
            <div class="icon-holder">
                <div v-for="icon in content.groupIcons" class="icon">
                    <img :src="icon" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "displayCard",
    props:["progress-item","render-position"]
}
</script>

<style lang='scss' scoped>
.display-card{
  width: calc(50% - 8px);
  .header-section{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5{
      width: 40px;
      color: #E75555;
    }
    .linker{
      height: 3px;
      border-bottom: 2px dashed grey;
      width: calc(100% - 50px);
    }
  }
  .text-body-clause{
    max-width: 350px;
    h4{
      //text-decoration:underline;
      //text-underline-offset: 3px;
      padding-bottom: 5px;
    }
    p{
      font-size: 0.9em;
      font-style: italic;
      color: #B6B3B3;
    }
  }
  .icon-holder{
    max-width: 350px;
    display: flex;
    flex-wrap: wrap;
    .icon{
      background-color: white;
      border-radius: 8px;
      height: 66px;
      width: 66px;
      margin:10px;
      img{
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: contain;
        padding: 5px;
      }
    }
  }
}

.render-right{
  .header-section{
    flex-direction: row-reverse;
  }
  .text-body-clause{
    max-width: 350px;
    text-align: right;
    p{
      font-size: 0.9em;
      font-style: italic;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>