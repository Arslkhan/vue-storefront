<template>
  <div class="accodion-main">
    <div class="container">
      <div class="cost-image">
        <img src="/assets/W10-Costa-Collab-icon.png" alt="costaLogo">
      </div>
      <div class="cost-image-heading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <button class="accordion accordion-first">
        <span>1. Why should I reuse my cup?</span>
      </button>
      <div class="panel">
        <p>
          Each year over 300 billion single-use coffee cups are manufactured globally. Due to their plastic content, less than 2% will ever be
        </p>
        <p>recycled. As takeaway drink consumption grows, so does the problem of waste.</p>
        <p>Choose to Re-use every single day.</p>
        <p>Follow us W10.world.</p>
      </div>

      <button class="accordion">
        <span>2. Can I use my own coffee cup in coffee shops?</span>
      </button>
      <div class="panel">
        <p>Incentives for bringing your own cup are becoming more and more common. With up to 50p/ 50c discount each time you choose to re-use,</p>
        <p>re-uses, you could have paid for your reusable cup!</p>
        <p>Here’s the current discount table of the main coffee chains:</p>
        <table>
          <tr>
            <th>Chain</th>
            <th>Reuse</th>
            <th>Discount</th>
          </tr>
          <tr>
            <td>Pret a Manger</td>
            <td>Yes</td>
            <td>£0.50p</td>
          </tr>
          <tr>
            <td>Café Nero</td>
            <td>Yes</td>
            <td>2 stamps per coffee on our loyalty</td>
          </tr>
          <tr>
            <td>Costa Coffee</td>
            <td>Yes</td>
            <td>£0.25p (Excludes some franchises)</td>
          </tr>
          <tr>
            <td>Starbucks</td>
            <td>Yes</td>
            <td>£0.25p</td>
          </tr>
          <tr>
            <td>Roadchef “Fresh Food Cafe”</td>
            <td>Yes</td>
            <td>£0.25p</td>
          </tr>
          <tr>
            <td>Greggs</td>
            <td>Yes</td>
            <td>£0.25p</td>
          </tr>
          <tr>
            <td>Benugo</td>
            <td>Yes</td>
            <td>£0.25p</td>
          </tr>
        </table>
      </div>

      <button class="accordion">
        <span>3. How do I remove tea/coffee stains?</span>
      </button>
      <div class="panel">
        <p>We would recommend the following cleaning method to aid in removing the tea/coffee stains:</p>
        <p>Materials:</p>
        <p>• Baking Soda, 1 tablespoon</p>
        <p>• Hot Boiling Water</p>
        <p>Instructions:</p>
        <p>1. Place baking soda into the tumbler/mug and fill it with hot boiling water.</p>
        <p>2. Place the silicone ring and silicone gasket into the tumbler/mug.</p>
        <p>3. Close it with the lid and set it aside to soak for 1 hour.</p>
        <p>4. Discard water. Rinse and wash tumbler thoroughly with a soft sponge and gentle dish-washing soap.</p>
      </div>

      <button class="accordion">
        <span>4. How do I remove I silicone /rubber smell</span>
      </button>
      <div class="panel">
        <p>We would recommend the following cleaning method to aid in removing the rubber smell, or watch it in action here.</p>
        <p>Materials:</p>
        <p>• Water</p>
        <p>• Vinegar</p>
        <p>Instructions:</p>
        <p>1. Detach the silicone parts, mouthpiece and stopper from the product’s body.</p>
        <p>2. Fill a bowl with vinegar and water with a ratio of 1:10.</p>
        <p>3. Soak them into the bowl for 1 to 3 hours.</p>
        <p>4. Rinse thoroughly and wipe dry with a clean towel.</p>
      </div>
      <button class="accordion">
        <span>5. Will there be a chemical reaction when storing acidic tea/coffee in the stainless steel products?</span>
      </button>
      <div class="panel">
        <p>W10 products are made of 304 food-grade Stainless Steel (commonly known as 18/10 or 18/8 stainless steel), and the material we</p>
        <p>used, contains 18%-20% Chromium and 8%-10% Nickel. 304 food-grade Stainless Steel is widely used in household and cookware</p>
        <p>products, because of its durability and corrosion-resistance features.</p>
        <p>As the acidic contents in tea and coffee is low, the food-grade Stainless Steel is safe to store them for hours. However, we would</p>
        <p>recommend to first rinse the tumbler/mug with water (best with hot water) to remove residues that may pick up the washing</p>
        <p>liquid during cleaning.</p>
      </div>
      <button class="accordion">
        <span>6. Is my Cup dishwasher safe ?</span>
      </button>
      <div class="panel">
        <p />
      </div>
      <button class="accordion">
        <span>7. Is my cup recyclable?</span>
      </button>
      <div class="panel">
        <p />
      </div>
      <button class="accordion">
        <span>8. All cups differ slightly but what are the basic things to be aware of when using a travel mug?</span>
      </button>
      <div class="panel">
        <p />
      </div>
      <div class="endpara">
        <span>Should you have any product questions, please email</span><a>contactus@W10.co</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.accordionTemplate();
  },
  methods: {
    accordionTemplate () {
      var acc = document.getElementsByClassName('accordion');
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
          /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
          this.classList.toggle('active');

          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === 'block') {
            panel.style.display = 'none';
          } else {
            panel.style.display = 'block';
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.accodion-main {
  padding: 0 0 25px 0;
}
.cost-image {
    display: flex;
    justify-content: center;
}
.cost-image-heading {
    h3 {
        color: #6d1f37;
        font-family: "BrandonMedium";
        font-weight: bold;
        font-size: 40px;
    }
}
// button:after {
//     background-image: url('/assets/Polygon.svg');
// }
/* Style the buttons that are used to open and close the accordion panel */
.accordion-first {
    margin-top: 0px !important;
}
.accordion {
    background-color: #F2F2F2;
    color: #000000;
    cursor: pointer;
    padding: 20px 35px;
    font-weight: 500;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    border: 1px solid #404042;
    margin: 17px 0 0 0;
    background: url(/assets/Polygondown.svg) #F2F2F2 no-repeat 98% 47%;
    font-family: 'BrandonMedium';
    background-size: 12px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.accordion:hover {
  background-color: #F2F2F2;
}
.active {
    background: url(/assets/Polygon.svg) #F2F2F2 no-repeat 98% 47%;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 24px 35px;
  background-color: white;
  display: none;
  overflow: hidden;
  border: 1px solid #333333;
  border-top: none;
  p {
    font-family: 'BrandonMedium';
    color: #000000;
    font-weight: 500;
    line-height: 28.6px;
    margin: 0;
  }
}
table {
    margin: 22px 0 32px 0;
    th {
        text-align: left;
        font-family: 'BrandonMedium';
        font-size: 17px;
        font-weight: 600;
        padding-bottom: 20px;
    }
    td {
        width: 36%;
        font-family: 'Brandon_reg';
        font-size: 18px;
        font-weight: 500;
        padding-bottom: 15px;
    }
}
    .endpara {
        padding: 34px 0 0 0;
        span {
            font-family: 'BrandonMedium';
            padding: 0 0 0 34px;
            font-size: 17px;
        }
        a {
            color: #404042;
            font-size: 17px;
            text-decoration: underline;
            font-family: 'BrandonMedium';
            padding: 0 0 0 10px;
            cursor: pointer;
        }
    }
    a.underline:after, a:not(.no-underline):hover:after {
        content: none;
    }
</style>
