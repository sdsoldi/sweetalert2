import { Swal, SwalWithoutAnimation, TIMEOUT } from '../helpers.js'

QUnit.test('stopTimer() method', (assert) => {
  const done = assert.async()

  SwalWithoutAnimation({
    timer: 5 * TIMEOUT
  })

  setTimeout(() => {
    assert.ok(Swal.stopTimer() > 0)
  }, 3 * TIMEOUT)

  setTimeout(() => {
    assert.ok(Swal.isVisible())
    done()
  }, 7 * TIMEOUT)
})

