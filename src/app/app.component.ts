import {Component} from '@angular/core';
import {Post} from './model/Post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Blog';
    posts: Post[] = [];

    constructor() {
        this.posts.push(new Post('Mon premier post', 'Post haec Gallus Hierapolim profecturus ' +
            'ut expeditioni specie tenus adesset, Antiochensi plebi suppliciter obsecranti ut ' +
            'inediae dispelleret metum, quae per multas difficilisque causas adfore iam sperabatur, ' +
            'non ut mos est principibus, quorum diffusa potestas localibus subinde medetur aerumnis, ' +
            'disponi quicquam statuit vel ex provinciis alimenta transferri conterminis, sed consularem Syriae ' +
            'Theophilum prope adstantem ultima metuenti multitudini dedit id adsidue replicando quod invito rectore ' +
            'nullus egere poterit victu.', 1));

        this.posts.push(new Post('Mon deuxième post', 'Rogatus ad ultimum admissusque in consistorium ' +
            'ambage nulla praegressa inconsiderate et leviter proficiscere inquit ut praeceptum est, ' +
            'Caesar sciens quod si cessaveris, et tuas et palatii tui auferri iubebo prope diem annonas. ' +
            'hocque solo contumaciter dicto subiratus abscessit nec in conspectum eius postea venit saepius ' +
            'arcessitus.', -1));

        this.posts.push(new Post('Encore un post', 'Erat autem diritatis eius hoc quoque indicium nec ' +
            'obscurum nec latens, quod ludicris cruentis delectabatur et in circo sex vel septem aliquotiens vetitis ' +
            'certaminibus pugilum vicissim se concidentium perfusorumque sanguine specie ut lucratus ingentia laetabatur.'));
    }
}
