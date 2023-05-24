<template lang="">
  <section class="banner-area relative">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row fullscreen align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6 banner-left">
          <h6 class="text-white">Away from monotonous life</h6>
          <h1 class="text-white">Magical Travel</h1>
          <p class="text-white">
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $.17 each.
          </p>
          <a href="#" class="primary-btn text-uppercase">Get Started</a>
        </div>
        <div class="col-lg-4 col-md-6 banner-right">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="flight-tab"
                data-toggle="tab"
                href="#flight"
                role="tab"
                aria-controls="flight"
                aria-selected="true"
                >Flights</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="hotel-tab"
                data-toggle="tab"
                href="#hotel"
                role="tab"
                aria-controls="hotel"
                aria-selected="false"
                >Hotels</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="holiday-tab"
                data-toggle="tab"
                href="#holiday"
                role="tab"
                aria-controls="holiday"
                aria-selected="false"
                >Holidays</a
              >
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="flight"
              role="tabpanel"
              aria-labelledby="flight-tab"
            >
              <form class="form-wrap">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'From '"
                />
                <input
                  type="text"
                  class="form-control"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'To '"
                />
                <input
                  type="text"
                  class="form-control date-picker"
                  name="start"
                  placeholder="Start "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Start '"
                />
                <input
                  type="text"
                  class="form-control date-picker"
                  name="return"
                  placeholder="Return "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Return '"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  class="form-control"
                  name="adults"
                  placeholder="Adults "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Adults '"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  class="form-control"
                  name="child"
                  placeholder="Child "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Child '"
                />
                <a href="#" class="primary-btn text-uppercase"
                  >Search flights</a
                >
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="hotel"
              role="tabpanel"
              aria-labelledby="hotel-tab"
            >
              <form class="form-wrap">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'From '"
                />
                <input
                  type="text"
                  class="form-control"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'To '"
                />
                <input
                  type="text"
                  class="form-control date-picker"
                  name="start"
                  placeholder="Start "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Start '"
                />
                <input
                  type="text"
                  class="form-control date-picker"
                  name="return"
                  placeholder="Return "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Return '"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  class="form-control"
                  name="adults"
                  placeholder="Adults "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Adults '"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  class="form-control"
                  name="child"
                  placeholder="Child "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Child '"
                />
                <a href="#" class="primary-btn text-uppercase">Search Hotels</a>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="holiday"
              role="tabpanel"
              aria-labelledby="holiday-tab"
            >
              <form class="form-wrap">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'From '"
                />
                <input
                  type="text"
                  class="form-control"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'To '"
                />
                <input
                  type="text"
                  class="form-control date-picker"
                  name="start"
                  placeholder="Start "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Start '"
                />
                <input
                  type="text"
                  class="form-control date-picker"
                  name="return"
                  placeholder="Return "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Return '"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  class="form-control"
                  name="adults"
                  placeholder="Adults "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Adults '"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  class="form-control"
                  name="child"
                  placeholder="Child "
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Child '"
                />
                <a href="#" class="primary-btn text-uppercase"
                  >Search Holidays</a
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script >
export default {
    name: 'Banner'
};
</script>

<style lang=""></style>
