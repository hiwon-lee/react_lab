export default function InfiniteScroll() {
  return (
    <>
      <template id="boxTemplate">
        <div class="sampleBox">
          <div class="label topLeft"></div>
          <div class="label topRight"></div>
          <div class="label bottomLeft"></div>
          <div class="label bottomRight"></div>
        </div>
      </template>

      <main>
        <div class="contents">
          <div class="wrapper"></div>
        </div>
      </main>
    </>
  );
}
