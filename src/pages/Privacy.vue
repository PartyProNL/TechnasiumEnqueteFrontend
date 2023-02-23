<script setup lang="ts">
import Pagelayout from '../components/structural/pagelayout.vue';


</script>

<template>
    <Pagelayout>
        <h1 class="text-4xl font-bold mb-3">Privacybeleid</h1>
    <p>U kunt zo meer lezen over welke gegevens wij verzamelen, waarom wij dat doen en hoe wij met deze gegevens omgaan. Het is voor ons erg belangrijk om uw privacy te bewaren.</p>
    
    <h2 class="mb-1 mt-5 text-xl font-bold">Welke gegevens verzamelen jullie?</h2>
    <p>Bij het invullen van onze enquête bewaren wij de volgende gegevens:
      <ul class="list-disc ml-7 my-3">
        <li>Uw antwoorden op de vragen van de enquête</li>
        <li>Een versie van uw e-mailadres dat onherkenbaar gemaakt is</li>
      </ul>
      Verder is belangrijk dat u weet dat uw e-mailadres op geen enkele wijze gekoppeld is aan de antwoorden die u gegeven heeft. Wij kunnen uw e-mail ook niet terugkoppelen aan uw antwoorden. Daardoor bewaart u anonimiteit.
    </p>

    <h2 class="mb-1 text-xl font-bold mt-5">Waarom verzamelen jullie deze gegevens?</h2>
    <p>
      Het doel van de enquête is om antwoord te krijgen van publiek op vragen. Om dit te kunnen doen moeten wij de antwoorden op de vragen van de enquête opslaan.
      <br>
      <br>
      Daarnaast is voor de betrouwbaarheid van de enquête belangrijk dat deze maar één keer ingevuld kan worden. Om ervoor te zorgen dat dit ook echt gebeurd gebruiken wij uw e-mailadres, en vergelijken wij deze (nadat deze onherkenbaar gemaakt is) met andere eerder gebruikte e-mailadressen. Deze zijn ook onherkenbaar gemaakt.
    </p>

    <h2 class="mb-1 text-xl font-bold mt-5">Hoe gaan jullie met mijn gegevens om?</h2>
    <p>Aan het einde van ons onderzoek zullen wij de antwoorden op de vragen analyseren. Hierbij kunnen wij, zoals eerder gezegd, de antwoorden niet koppelen aan de e-mailadressen en blijft u anoniem.</p>
  
    <h2 class="mb-1 text-xl font-bold mt-5">Hoe weet ik dat mijn gegevens veilig zijn?</h2>
    <p>
      Zoals eerder gezegd wordt uw e-mailadres niet gekoppeld aan uw antwoorden. De lijst van e-mailadressen staat op een aparte plek opgeslagen in onze database, en bevat geen verwijzingen en/of verbindingen naar uw antwoorden. Dit geldt ook andersom voor uw antwoorden; deze hebben geen koppeling aan uw e-mailadres, tenzij u dit zelf in uw antwoord verwerkt hebt.
      <br>
      <br>
      Uw e-mailadres wordt tevens beschermd doormiddel van een hashfunctie. Dit is een cryptografische functie dat uw e-mailadres onherkenbaar maakt. U kunt meer lezen over hashfuncties op <a href="https://nl.wikipedia.org/wiki/Hashfunctie" class="text-blue-400 underline">https://nl.wikipedia.org/wiki/Hashfunctie</a>. De gebruikte hashfunctie is Argon2id. Over deze hashfunctie kunt u meer lezen op <a href="https://en.wikipedia.org/wiki/Argon2" class="text-blue-400 underline">https://en.wikipedia.org/wiki/Argon2</a>.
    </p>
    
    <h2 class="mb-1 text-xl font-bold mt-5">Mijn vraag is nog niet beantwoordt, wat moet ik nu?</h2> 
    <p>Als uw vraag nog niet beantwoordt is of u een ander verzoek heeft, kunt u contact opnemen met ons via het volgende e-mailadres: <i>b132665(apenstaartje)atlascollege(punt)nl</i></p>
  
    </Pagelayout>
  <!-- <div class="flex flex-col max-w-lg mx-auto pt-10 pb-10">
    
  </div> -->
</template>