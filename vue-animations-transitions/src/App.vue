<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations [hardcoded]</h1>
                <button class="btn btn-primary" @click="show = !show">Show hardcoded</button>
                <br><br>
                <transition name="fade">
                  <div class="alert alert-info" v-if="show">
                    this is some info
                  </div>
                </transition>
                <transition name="slide" appear>
                  <div class="alert alert-info" v-if="show">
                    this is some info
                  </div>
                </transition>
                <transition
                  enter-active-class="animated bounceIn"
                  leave-active-class="animated bounceOut">
                  <div class="alert alert-info" v-if="show">
                    this is some info
                  </div>
                </transition>
                <h1>Animations [dynamic]</h1>
                <select class="form-control" v-model="alertAnimation">
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="showDynamic = !showDynamic">Show dynamic</button>
                <br><br>
                <transition :name="alertAnimation">
                  <div class="alert alert-info" v-if="showDynamic">
                    this is some info
                  </div>
                </transition>
                <transition :name="alertAnimation">
                  <div class="alert alert-info" v-if="showDynamic">
                    this is some info
                  </div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                  <div class="alert alert-info" v-if="showDynamic" key="info">
                    this is some info
                  </div>
                  <div class="alert alert-warning" v-else key="warning">
                    this is some warning
                  </div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load | Remove element</button>
                <br><br>
                <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"

                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled"
                  :css="false">
                  <div style="width: 300px; height: 100px; background-color: red" v-if="load">
                  </div>
                </transition>
                <h3>Components</h3>
                <button class="btn btn-primary" @click="selectedComponent == 'app-success' ? selectedComponent = 'app-danger' :  selectedComponent = 'app-success'">
                  Toggle
                </button>
                <br><br>
                <transition name="fade" mode="out-in">
                  <component :is="selectedComponent"></component>
                </transition>
                <h3>Group animations</h3>
                <button type="button" class="btn btn-primary" @click="addItem"> Add item </button>
                <br><br>
                <ul class="list-group">
                  <transition-group name="fade">
                    <li
                        class="list-group-item"
                        v-for="(number, index) in numbers"
                        @click="removeItem(index)"
                        style="cursor: pointer"
                        :key="number">{{ number }}
                    </li>
                  </transition-group>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Danger from './Danger.vue';
    import Success from './Success.vue';

    export default {
        data() {
            return {
              show: false,
              showDynamic: false,
              alertAnimation: 'fade',
              load: true,
              elementWidth: 100,
              selectedComponent: 'app-success',
              numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        },
        components: {
          appDanger: Danger,
          appSuccess: Success
        },
        methods: {
          beforeEnter(el) {
            console.log('before enter', el);
            this.elementWidth = 100;
            el.style.width = this.elementWidth + 'px';
          },
          enter(el, done) {
            let round = 1;
            const INTERVAL = setInterval(() => {
              el.style.width = (this.elementWidth + round * 10) + 'px';
              round++;
              if (round > 20) {
                clearInterval(INTERVAL);
                done();
              }
            }, 20);
          },
          afterEnter(el) {
            console.log('afterEnter');
          },
          enterCancelled(el) {
            console.log('Enter cancelled');
          },
          beforeLeave(el) {
            console.log('before leave');
            this.elementWidth = 300;
            el.style.width = this.elementWidth + 'px';
          },
          leave(el, done) {
            let round = 1;
            const INTERVAL = setInterval(() => {
              el.style.width = (this.elementWidth - round * 10) + 'px';
              round++;
              if (round > 20) {
                clearInterval(INTERVAL);
                done();
              }
            }, 20);
          },
          afterLeave(el) {
            console.log('after leave');
          },
          leaveCancelled(el) {
            console.log('leave cancelled');
          },
          addItem() {
            const POS = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(POS, 0, this.numbers.length + 1);
          },
          removeItem(index) {
            this.numbers.splice(parseInt(index), 1);
          }
        }
    }
</script>

<style>
/* Fade transition */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {

}

.fade-leave-active {
 transition: opacity 1s;
 opacity: 0;
}

/* Slide animation */
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave {

}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

/* Extra class for transition-group animations */

.fade-move {
  transition: transform 1s;
}

/* Keyframes */

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
