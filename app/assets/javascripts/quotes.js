var activeQuote;

var quotes = [
   { author: 'reepz', content: 'Appareantly you didn\'t move instantly enough.' },
   { author: 'Edsger W. Dijkstra', content: 'The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.' },
   { author: 'Alan Turing', content: 'I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted.' },
   { author: 'Arthur C. Clarke', content: 'Whether we are based on carbon or on silicon makes no fundamental difference; we should each be treated with appropriate respect.' },
   { author: 'Eliezer Yudkowsky', content: 'By far the greatest danger of Artificial Intelligence is that people conclude too early that they understand it.' },
   { author: 'Terry Pratchett', content: 'Real stupidity beats artificial intelligence every time.' },
   { author: 'Douglas R. Hofstadter', content: 'Sometimes it seems as though each new step towards AI, rather than producing something which everyone agrees is real intelligence, merely reveals what real intelligence is not.' },
   { author: 'Eliezer Yudkowsky', content: 'The AI does not hate you, nor does it love you, but you are made out of atoms which it can use for something else.' },
   { author: 'Ginni Rometty', content: 'Some people call this artificial intelligence, but the reality is this technology will enhance us. So instead of artificial intelligence, I think we\'ll augment our intelligence.' },
   { author: 'Yuri Milner', content: 'Facebook is at the forefront. It\'s the company that can fundamentally change the way information is being exchanged and processed. It can be the basis for artificial intelligence to develop over time.' },
   { author: 'Louis B. Rosenberg', content: 'We focus on a unique form of artificial intelligence called artificial swarm intelligence.' },
   { author: 'Gray Scott', content: 'There is no reason and no way that a human mind can keep up with an artificial intelligence machine by 2035.' }]


function randomGenerator() {
  min = 0;
  max = quotes.length;

  return Math.floor(Math.random() * (max - min)) + min;
}
findRandomQuote();

function findRandomQuote() {
  activeQuote = quotes[randomGenerator()]
  return activeQuote;
}

$(document).ready(function() {
  findRandomQuote();
  $(".content").text(activeQuote.content);
  $(".content").append('<footer class="author">' + activeQuote.author + '</footer>');
  $("#twitter_link").attr("href", "http://twitter.com/intent/tweet?hashtags=quotes&text=" + activeQuote.content + " by: " + activeQuote.author);
  $("#button").click(function() {
    findRandomQuote();
    $(".content").fadeOut(500, function() {
      $(".content").text(activeQuote.content).fadeIn(500);
      $(".content").append('<footer class="author">' + activeQuote.author + '</footer>');
    });
  });
});
