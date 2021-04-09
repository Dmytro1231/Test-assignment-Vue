<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="title">Contacts</h2>
      <div class="wrapper-info">
        <div class="block-contact">
          <h4 class="subtitle"><span>GMS</span> Headquarters</h4>
          <div class="block-left">
            <p>Global Message Services Ukraine LLC</p>
            <p>Bundesstrasse 5 | 3rd Floor</p>
            <p>6300 Zug</p>
            <p>Switzerland</p>
            <div class="phone">
              <a class="tel" href="tel:+41415446200">+41 41 544 62 00</a>
            </div>
          </div>
          <div class="block-right">
            <p>Email</p>
            <a href="mailto:INFO@GMS-WORLDWIDE.COM">info@gms-worldwide.com</a>
            <p>Send message</p>
            <a href="#contact">VIBER US</a>
            <p>Send from</p>
            <a href="#contact">CONTACT US</a>
          </div>
        </div>
        <div class="block-support">
          <h2 class="support-title">Technical support <span>24/7</span></h2>
          <p>
            GMS understands that it can be hard to follow all new
            technologies.We regularly provide for all our clients educational
            trainings to make your operator's business eam more and better
            though our best practices.
          </p>
          <div class="phone">
            <a class="tel" href="tel:+41415446206">+41 41 544 62 06</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
$green: rgb(61, 181, 101);
$primary: rgb(51, 51, 51);

.wrapper {
  padding: 62px 62px 85px;
  color: $primary;
  .title {
    margin-bottom: 25px;
    font-size: 50px;
  }
  .wrapper-info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .block-contact {
      display: grid;
      grid-template-columns: 290px 250px;
      grid-template-rows: 73px;
      width: 50%;
      .subtitle {
        font-size: 34px;
        span {
          color: $green;
        }
      }
      .block-left {
        grid-column-start: 1;
        font-size: 15px;
        line-height: 1.867;
        p {
          &:last-child {
            margin-bottom: 40px;
          }
        }
        .phone {
          margin-top: 17px;
        }
      }
      .block-right {
        text-decoration: none;
        font-size: 15px;
        line-height: 1.867;
        a {
          margin-bottom: 17px;
          text-decoration: none;
          color: $green;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      }
    }
    .block-support {
      max-width: 550px;
      .support-title {
        font-size: 34px;
        line-height: 1.412;
        margin-bottom: 28px;
        span {
          color: $green;
        }
      }
      p {
        font-size: 15px;
        line-height: 1.867;
        margin-bottom: 22px;
      }
    }
  }
  .tel {
    color: $green;
    font-size: 26px;
    text-decoration: none;
    margin-top: 20px;
  }
}
@media (max-width: 1250px) {
  .block-support {
    margin-top: 50px;
  }
  @media (max-width: 600px) {
    .wrapper {
      padding-left: 15px !important;
      padding-top: 15px !important;
      padding-right: 15px !important;
    }
    .block-contact {
      display: flex !important;
      flex-direction: column;
    }
  }
  @media (max-width: 480px) {
    .wrapper {
      padding-left: 10px;
      padding-top: 25px;
      padding-bottom: 20px;
      padding-right: 20px;
      .title {
        font-size: 24px;
      }
      .tel {
        font-size: 18px;
      }
      .block-contact {
        display: flex !important;
        flex-direction: column;
        width: 100% !important;
        .subtitle {
          margin-bottom: 15px;
          font-size: 20px !important;
        }
      }
      .support-title {
        font-size: 24px !important;
      }
    }
  }
}
</style>