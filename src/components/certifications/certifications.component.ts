import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
certs = [
    'Component Libraries: Architecture & Process (2025) from Angular Architects',
    'SAFe 4 Practitioner Certification (2018)',
    'High Flyer Award (2016 - 2022)',
    'Amadeus Dream Team Award (2019)',
    'Tech Gig Code Gladiators 2022 - Ranked 190 nationally'
]
}