import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-advent-calendar',
  templateUrl: './advent-calendar.component.html',
  styleUrls: ['./advent-calendar.component.scss']
})
export class AdventCalendarComponent implements OnInit {

  dateCoupon: Array<any> = [];

  constructor(private router: Router, private giftService: CouponService) { }

  ngOnInit(): void {
    this.checkUser();
    this.getDateCoupon();
  }

  getDateCoupon() {
    this.giftService.getDateCoupon().subscribe({
      next: (res: any) => {
        this.dateCoupon = res;
      }
    })
  }

  checkUser() {
    if (!localStorage.getItem("jwt")) {
      this.router.navigate(["/register"], {
        queryParams: {
          registerToShowAdventCalendar: true
        }
      })
    }
  }

  generateGift(cardData: any) {
    let isCouponDate = this.dateCoupon.some((couponList: any) => couponList.data === cardData.value);
    if (isCouponDate) {
      this.giftService.generateCouponMail(cardData.value).subscribe({
        next: (res: any) => { }
      })
    } else {
      this.giftService.generateMailWithPdf(cardData.value, cardData.pdf).subscribe({
        next: (res: any) => { }
      })
    }
  }

}
