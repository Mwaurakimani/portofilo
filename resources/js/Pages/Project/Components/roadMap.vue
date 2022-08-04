<template>
    <div class="holder">
        <div v-for="(RoadMapItem,index) in progress" :class="['long-card',is_even_long_card(index) ? 'place-right' : '']">
            <display-card :render-position.camel="is_even_long_card(index)" :progress-item.camel="RoadMapItem">

            </display-card>
        </div>
    </div>
    <div class="bar p-[10px]">
        <div class="long-bar">

        </div>
    </div>
</template>

<script>
import displayCard from "./displayCard.vue";


export default {
    name: "roadMap",
    components:{
        displayCard
    },
    methods:{
        is_even_long_card(data){
            if ( (data % 2) > 0){
                return true;
            }else {
                return false;
            }
        }
    },
    data(){
        return{
            progress:[
                {
                    year:2017,
                    contents:[
                        {
                            title:"Basic Web Development :",
                            description:"HTML 5, CSS 3, Bootstrap, Jquery, Javascript ES5, PHP,MySQL/Maria BD",
                            groupIcons:[
                                "/storage/icons/roadmap/html.png",
                                "/storage/icons/roadmap/css.png",
                                "/storage/icons/roadmap/bootstrap.png",
                                "/storage/icons/roadmap/jquery.png",
                                "/storage/icons/roadmap/javascript.png",
                                "/storage/icons/roadmap/php.png",
                                "/storage/icons/roadmap/mysql.png",
                            ]
                        }
                    ]
                },
                {
                    year:2018,
                    contents:[
                        {
                            title:"Basic Programming :",
                            description:"Java ,C++, C#",
                            groupIcons:[
                                "/storage/icons/roadmap/java.png",
                                "/storage/icons/roadmap/cplusplus.png",
                                "/storage/icons/roadmap/csharp.png",
                            ]
                        }
                    ]
                },
                {
                    year:2019,
                    contents:[
                        {
                            title:"Operating Systems :",
                            description:"Windows, Linux, C language",
                            groupIcons:[
                                "/storage/icons/roadmap/windows.png",
                                "/storage/icons/roadmap/linux.png",
                                "/storage/icons/roadmap/clanguage.png",
                            ]
                        }
                    ]
                },
                {
                    year:2020,
                    contents:[
                        {
                            title:"Graphics and Design",
                            description:"Adobe Photoshop, Adobe Illustrator, Adobe XD",
                            groupIcons:[
                                "/storage/icons/roadmap/photoshop.png",
                                "/storage/icons/roadmap/illustrator.png",
                                "/storage/icons/roadmap/xd.png",
                            ]
                        },
                        {
                            title:"Programming",
                            description:"Python, Mongo DB, SQLite, Git, Node Js",
                            groupIcons:[
                                "/storage/icons/roadmap/python.png",
                                "/storage/icons/roadmap/mongo.png",
                                "/storage/icons/roadmap/sqlite.png",
                                "/storage/icons/roadmap/git.png",
                                "/storage/icons/roadmap/node.png"
                            ]
                        }
                    ],

                },
                {
                    year:2021,
                    contents:[
                        {
                            title:"Software Architecture and Design",
                            description:"IDEAs, Project Management : \n IntelliJ IDEA, Phpstorm, Datagrip, Youtrack, Jira, Slack, Selenium",
                            groupIcons:[
                                "/storage/icons/roadmap/intelliJ.png",
                                "/storage/icons/roadmap/phpstorm.png",
                                "/storage/icons/roadmap/datagrip.png",
                                "/storage/icons/roadmap/youtrack.png",
                                "/storage/icons/roadmap/jira.png",
                                "/storage/icons/roadmap/slack.png",
                                "/storage/icons/roadmap/selenium.png",
                            ]
                        },
                        {
                            title:"Web Application Development :",
                            description:"Laravel, Vue Js, React, Tailwind, SCSS",
                            groupIcons:[
                                "/storage/icons/roadmap/laravel.png",
                                "/storage/icons/roadmap/vue.png",
                                "/storage/icons/roadmap/react.png",
                                "/storage/icons/roadmap/tailwind.png",
                                "/storage/icons/roadmap/sass.png",
                            ]
                        }
                    ]
                },
                {
                    year:2022,
                    contents:[
                        {
                            title:"Dev Ops:",
                            description:"Google Cloud Platform, Microsoft Azure, Docker, Kubernetes",
                            groupIcons:[
                                "/storage/icons/roadmap/gcp.png",
                                "/storage/icons/roadmap/azure.png",
                                "/storage/icons/roadmap/docker.png",
                                "/storage/icons/roadmap/kubernetes.png",
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>

.bar{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .long-bar{
    width: 16px;
    height: 100%;
    background-color: #EF4848;
    border-radius: 8px;
  }
}

.holder{
  width: 100%;
  height: 100%;
  padding: 30px;
  .long-card{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

  }

  .place-right{
    justify-content: end;
  }
}

</style>