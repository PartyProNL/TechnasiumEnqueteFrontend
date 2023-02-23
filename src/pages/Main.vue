<script lang="ts" setup>
import TextInput from '../components/inputs/TextInput.vue';
import Pagelayout from '../components/structural/pagelayout.vue';
import { ref, reactive } from 'vue';
import CheckBox from '../components/inputs/CheckBox.vue';
import CheckBoxGroup from '../components/inputs/CheckBoxGroup.vue';
import RadioButton from '../components/inputs/RadioButton.vue';
import RadioButtonGroup from '../components/inputs/RadioButtonGroup.vue';
import { BackendUtil } from '../middleware/backendUtil';
import router from '../middleware/router';

class Answer {
    email?: string = "";
    bezoek?: string = "";
    activiteiten?: string[] = [];
    mensen?: {
        natuurspeeltuin?: string[];
        natuurbeleving?: string[];
        lichaamsbeweging?: string[];
        huisdier?: string[];
        combinatie?: string[];
    }
    activiteitBezoeken?: {
        natuurspeeltuin?: string;
        natuurbeleving?: string;
        lichaamsbeweging?: string;
        huisdier?: string;
        combinatie?: string;
    }
    // activiteitCijfer?: {
    //     natuurspeeltuin?: string;
    //     natuurbeleving?: string;
    //     lichaamsbeweging?: string;
    //     huisdier?: string;
    // }
    // activiteitFeedback?: {
    //     natuurspeeltuin?: string;
    //     natuurbeleving?: string;
    //     lichaamsbeweging?: string;
    //     huisdier?: string;
    // }
    feedback?: string = "";
    leeftijd?: string = "";
    cijfer?: string = "";
    aanbevelen?: string = "";
}

let tempEmail = Math.floor(Math.random() * 99999999) + "";

const answers = reactive<Answer>({
    email: "",
    bezoek: "",
    activiteiten: [],
    mensen: {},
    activiteitBezoeken: {},
    // activiteitCijfer: {},
    // activiteitFeedback: {},
    feedback: "",
    leeftijd: "",
    cijfer: "",
    aanbevelen: "",
})

answers.email = tempEmail;

const send = async () => {
    const email = answers.email
    answers.email = undefined
    const data = await BackendUtil.sendAnswer(answers, email!).then((res) => {
        router.push({
            name: "succes",
            state: {
                statusCode: res.status
            }
        })
    })
    .catch((err) => {
        router.push({
            name: "succes",
            state: {
                statusCode: 400,
            }
        })
    })
}

</script>

<template> 
    <Pagelayout>
        <form action="javascript:void(0)">
            <div class="my-4 divide-y divide-slate-200">
                <h1 class="text-3xl font-semibold mb-3">Enquête bezoek MAK Blokweer</h1>

                <div class="text-md mb-6 pt-2 text-slate-700">
                    <p class="mb-2">Goedendag! Bedankt dat u de tijd neemt om deze enquête over het natuurpark van MAK Blokweer in te vullen. Het natuurpark is het openbare gebied van MAK Blokweer.</p>
                    <p class="mb-2">Het hoofddoel van deze enquête is om meer inzicht te krijgen in hoeveel mensen MAK Blokweer bezoeken en hoe zij hun bezoek ervaren. Deze informatie is voor MAK Blokweer erg waardevol, omdat deze gebruikt kan worden voor subsidies en verbeteringen.</p>
                    <p class="mb-2">Privacy is voor ons erg belangrijk. Daarom worden alle gegevens die wij via deze enquête binnen krijgen anoniem en zorgvuldig verwerkt. We delen daarnaast ook geen gegevens met derden. U kunt daar meer over lezen in ons <RouterLink class="underline text-blue-500" to="/privacybeleid">privacybeleid</RouterLink>.</p>
                </div>
            </div>
            
            <div class="mb-4">
                <h1 class="text-xl font-semibold mb-2">Deel 1</h1>
                <p class="text-slate-700">In dit eerste deel gaan wij in op hoe vaak u MAK Blokweer bezoekt en wat voor activiteit u onderneemt. De hoofdvragen hier zijn verplicht.</p>
            </div>
            
            <!-- <TextInput 
            v-model="answers.email" 
            placeholder="voornaamAchternaam1@outlook.com" 
            label="Wat is uw email-adres?" 
            id="email" 
            :required=true>
            </TextInput> -->

            <TextInput 
            v-model="answers.bezoek" 
            placeholder="Bijv. 3 keer per jaar of 2 keer per dag" 
            label="Hoe vaak bezoekt u het natuurgebied van MAK Blokweer per dag, week, maand, of jaar?" 
            id="bezoek" 
            :required=true>
            </TextInput>

            <CheckBoxGroup label="Welke activiteiten onderneemt u als u MAK Blokweer bezoekt?"
            v-model="answers.activiteiten"
            :values="[
                {value:'natuurspeeltuin',label:'Om gebruik te maken van de natuurspeeltuin'},
                {value:'natuurbeleving',label:'Voor de natuurbeleving (voor de rust/de dieren/het bos/de wandelpaden etc.)'}, 
                {value:'lichaamsbeweging',label:'Voor lichaamsbeweging'},
                {value:'huisdier',label:'Om een hond (of ander huisdier) uit te laten'},
                {value:'combinatie',label:'Mijn huisdier uitlaten gecombineerd met lichaamsbeweging'},
            ]"
            otherplaceholder="Uw andere activiteit"></CheckBoxGroup>
            
            <div v-if="answers.activiteiten!.includes('natuurspeeltuin')">
                <CheckBoxGroup label="Met welke mensen maakt u gebruik van de natuurspeeltuin?" v-model="answers.mensen!.natuurspeeltuin" :values="[
                {value:'zonder',label:'Zonder anderen'},
                {value:'gezinshuishouden',label:'Met gezinshuishouden (partner/kind(eren))'},
                {value:'familie',label:'Met familie, buiten mijn eigen huishouden'},
                {value:'vrienden',label:'Met vriend(en)'},
                {value:'collegas',label:'Met collega(’s)/ klasgenoot/klasgenoten'},
            ]" otherplaceholder="Andere mensen"></CheckBoxGroup>

                <TextInput 
                v-model="answers.activiteitBezoeken!.natuurspeeltuin" 
                placeholder="Bijv. 3 keer per jaar of 2 keer per dag" 
                label="Hoe vaak bezoekt u de natuurspeeltuin van MAK Blokweer per dag, week, maand, of jaar?" 
                id="bezoekNatuurspeeltuin" 
                :required=true>
                </TextInput>

                <!-- <TextInput 
                v-model="answers.activiteitCijfer!.natuurspeeltuin" 
                placeholder="1-10" 
                label="Welk cijfer van 1-10 geeft u uw bezoek aan de natuurspeeltuin?" 
                id="cijferNatuurspeeltuin" 
                type="number"
                :required=true>
                </TextInput>

                <TextInput 
                v-model="answers.activiteitFeedback!.natuurspeeltuin" 
                placeholder="Dit vond ik van deze activiteit" 
                label="Heeft u nog extra feedback over de natuurspeeltuin?" 
                id="feedbackNatuurspeeltuin" 
                :required=false>
                </TextInput> -->
            </div>

            <div v-if="answers.activiteiten!.includes('natuurbeleving')">
                <CheckBoxGroup label="Met welke mensen ervaarde u de natuurbeleving?" v-model="answers.mensen!.natuurbeleving" :values="[
                {value:'zonder',label:'Zonder anderen'},
                {value:'gezinshuishouden',label:'Met gezinshuishouden (partner/kind(eren))'},
                {value:'familie',label:'Met familie, buiten mijn eigen huishouden'},
                {value:'vrienden',label:'Met vriend(en)'},
                {value:'collegas',label:'Met collega(’s)/ klasgenoot/klasgenoten'},
            ]" otherplaceholder="Andere mensen"></CheckBoxGroup>

                <TextInput 
                v-model="answers.activiteitBezoeken!.natuurbeleving" 
                placeholder="Bijv. 3 keer per jaar of 2 keer per dag" 
                label="Hoe vaak bezoekt u MAK Blokweer voor de natuurbeleving per dag, week, maand, of jaar?" 
                id="bezoekerNatuurbeleving" 
                :required=true>
                </TextInput>

                <!-- <TextInput 
                v-model="answers.activiteitCijfer!.natuurbeleving" 
                placeholder="1-10" 
                label="Welk cijfer van 1-10 geeft u uw bezoek aan MAK Blokweer voor de natuurbeleving?" 
                id="cijferNatuurbeleving" 
                type="number"
                :required=true>
                </TextInput>

                <TextInput 
                v-model="answers.activiteitFeedback!.natuurbeleving" 
                placeholder="Dit vond ik van deze activiteit" 
                label="Heeft u nog extra feedback over de natuurbeleving?" 
                id="feedbackNatuurbeleving" 
                :required=false>
                </TextInput> -->
            </div>

            <div v-if="answers.activiteiten!.includes('lichaamsbeweging')">
                <CheckBoxGroup label="Met welke mensen gaat u naar MAK Blokweer voor lichaamsbeweging?" v-model="answers.mensen!.lichaamsbeweging" :values="[
                {value:'zonder',label:'Zonder anderen'},
                {value:'gezinshuishouden',label:'Met gezinshuishouden (partner/kind(eren))'},
                {value:'familie',label:'Met familie, buiten mijn eigen huishouden'},
                {value:'vrienden',label:'Met vriend(en)'},
                {value:'collegas',label:'Met collega(’s)/ klasgenoot/klasgenoten'},
            ]" otherplaceholder="Andere mensen"></CheckBoxGroup>

                <TextInput 
                v-model="answers.activiteitBezoeken!.lichaamsbeweging" 
                placeholder="Bijv. 3 keer per jaar of 2 keer per dag" 
                label="Hoe vaak bezoekt u MAK Blokweer voor lichaamsbeweging per dag, week, maand, of jaar?" 
                id="bezoekerLichaamsbeweging" 
                :required=true>
                </TextInput>

                <!-- <TextInput 
                v-model="answers.activiteitCijfer!.lichaamsbeweging" 
                placeholder="1-10" 
                label="Welk cijfer van 1-10 geeft u uw bezoek aan MAK Blokweer voor lichaamsbeweging?" 
                id="cijferLichaamsbeweging" 
                type="number"
                :required=true>
                </TextInput>

                <TextInput 
                v-model="answers.activiteitFeedback!.lichaamsbeweging" 
                placeholder="Dit vond ik van deze activiteit" 
                label="Heeft u nog extra feedback over lichaamsbeweging in MAK Blokweer?" 
                id="feedbackLichaamsbeweging" 
                :required=false>
                </TextInput> -->
            </div>

            <div v-if="answers.activiteiten!.includes('huisdier')">
                <CheckBoxGroup label="Met welke mensen gaat u naar MAK Blokweer om uw huisdier(en) uit te laten?" v-model="answers.mensen!.huisdier" :values="[
                {value:'zonder',label:'Zonder anderen'},
                {value:'gezinshuishouden',label:'Met gezinshuishouden (partner/kind(eren))'},
                {value:'familie',label:'Met familie, buiten mijn eigen huishouden'},
                {value:'vrienden',label:'Met vriend(en)'},
                {value:'collegas',label:'Met collega(’s)/ klasgenoot/klasgenoten'},
            ]" otherplaceholder="Andere mensen"></CheckBoxGroup>

                <TextInput 
                v-model="answers.activiteitBezoeken!.huisdier" 
                placeholder="Bijv. 3 keer per jaar of 2 keer per dag" 
                label="Hoe vaak bezoekt u MAK Blokweer om uw huisdier(en) uit te laten per dag, week, maand, of jaar?" 
                id="bezoekerHuisdier" 
                :required=true>
                </TextInput>

                <!-- <TextInput 
                v-model="answers.activiteitCijfer!.huisdier" 
                placeholder="1-10" 
                label="Welk cijfer van 1-10 geeft u uw bezoek aan MAK Blokweer om uw huisdier(en) uit te laten?" 
                id="cijferHuisdier" 
                type="number"
                :required=true>
                </TextInput>

                <TextInput 
                v-model="answers.activiteitFeedback!.huisdier" 
                placeholder="Dit vond ik van deze activiteit" 
                label="Heeft u nog extra feedback over het het uit laten van uw huisdier(en) in MAK Blokweer?" 
                id="feedbackHuisdier" 
                :required=false>
                </TextInput> -->
            </div>

            <div v-if="answers.activiteiten!.includes('combinatie')">
                <CheckBoxGroup label="Met welke mensen gaat u naar MAK Blokweer om uw huisdier(en) uit te laten en tegelijk te bewegen?" v-model="answers.mensen!.huisdier" :values="[
                {value:'zonder',label:'Zonder anderen'},
                {value:'gezinshuishouden',label:'Met gezinshuishouden (partner/kind(eren))'},
                {value:'familie',label:'Met familie, buiten mijn eigen huishouden'},
                {value:'vrienden',label:'Met vriend(en)'},
                {value:'collegas',label:'Met collega(’s)/ klasgenoot/klasgenoten'},
            ]" otherplaceholder="Andere mensen"></CheckBoxGroup>

                <TextInput 
                v-model="answers.activiteitBezoeken!.huisdier" 
                placeholder="Bijv. 3 keer per jaar of 2 keer per dag" 
                label="Hoe vaak bezoekt u MAK Blokweer om uw huisdier(en) uit te laten en tegelijk te bewegen per dag, week, maand, of jaar?" 
                id="bezoekerHuisdier" 
                :required=true>
                </TextInput>
            </div>
            
            <div class="mb-4">
                <h1 class="text-xl font-semibold mb-2">Deel 2</h1>
                <p class="text-slate-700">Wij gaan u nu nog een paar extra vragen stellen. Deze zijn niet verplicht, maar wij zouden het zeer op prijs stellen als u deze zou beantwoorden, omdat deze kunnen helpen bij het verklaren van onze resultaten. Deze antwoorden kunnen bovendien nog andere extra waarde voor MAK Blokweer hebben.</p>
            </div>

            <RadioButtonGroup label="In welke leeftijdscategorie bevindt u zich?"
            :values="[
                {value:'tot18',label:'tot en met 18 jaar'},
                {value:'tot25',label:'19 tot 25 jaar'},
                {value:'tot35',label:'26 tot 35 jaar'},
                {value:'tot50',label:'36 tot 50 jaar'},
                {value:'tot65',label:'51 tot 65 jaar'},
                {value:'tot65plus', label:'65+'},
                {value:'geen',label:'Ik deel mijn leeftijd liever niet'}
            ]"
            group-name="leeftijd"
            v-model="answers.leeftijd"
            ></RadioButtonGroup>

            <TextInput 
            v-model="answers.cijfer" 
            placeholder="1-10" 
            label="Welk cijfer van 1-10 geeft u uw bezoek aan MAK Blokweer?" 
            id="cijfer" 
            type="number"
            :required=false>
            </TextInput>

            <TextInput 
            v-model="answers.feedback" 
            placeholder="Dit vond ik van MAK Blokweer" 
            label="Heeft u nog feedback voor MAK Blokweer?" 
            id="feedbackHuisdier" 
            :required=false>
            </TextInput>

            <TextInput 
            v-model="answers.aanbevelen" 
            placeholder="Ja/nee, want ..." 
            label="Zou u het natuurpark van MAK Blokweer aanbevelen aan familie/vrienden/kennissen? Waarom?" 
            id="feedback" 
            :required=false>
            </TextInput>

            <button class="mb-4 bg-blue-500 rounded py-1 px-2 font-semibold text-white" @click="send">Verzend</button>

            <!-- <pre>{{ JSON.stringify(answers, null, 2) }}</pre> -->

        </form>
    </Pagelayout>
</template>