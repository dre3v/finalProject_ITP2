<template>
  <div id="app">
    <center>
      <v-card id="quizCard" class="ma-10 pa-5" width="1000" elevation="10" color="white">
        <v-card-title>
          <h1  id="quiz"><strong>Quiz Sports</strong></h1>
        </v-card-title>

        <v-card-text class="ma-4">
          <quiz id="quiz" @quiz-completed="handleQuizCompleted" :key="quizKey"  />
          <quiz-modal v-show="showModal" id="quiz" header="Congratulations!" subheader="You've completed the Quiz!" :score="score"
            @reload="updateQuiz" @close="showModal = false" />
        </v-card-text>

      </v-card>

    </center>
  </div>
</template>

<script>
import QuizModal from "../components/QuizModal.vue";
import Quiz from "../components/Quiz.vue";

export default {
  components: { Quiz, QuizModal },
  name: "App",
  data() {
    return {
      quizKey: 0,
      showModal: false,
      score: {
        allQuestions: 0,
        answeredQuestions: 0,
        correctlyAnsweredQuestions: 0,
      },
    };
  },
  methods: {
    handleQuizCompleted(score) {
      this.score = score;
      this.showModal = true;
    },
    updateQuiz() {
      this.showModal = false;
      this.quizKey++;
    },
  },
};
</script>
<style>
 #quiz{
    color: rgb(0, 0, 0);
   }
   #quizCard {
    background-image: url("https://img.freepik.com/premium-photo/mini-soccer-ball-blue-pastel-background-minimalism-sport-concept-top-view-flat-lay_175682-22298.jpg?w=2000");
   }
   #finishCard {
    background-image: url("https://img.freepik.com/premium-photo/mini-soccer-ball-blue-pastel-background-minimalism-sport-concept-top-view-flat-lay_175682-22298.jpg?w=2000");
   }
</style>