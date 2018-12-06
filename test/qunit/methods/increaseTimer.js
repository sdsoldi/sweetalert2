import { Swal, SwalWithoutAnimation, TIMEOUT } from '../helpers.js'

QUnit.test('increaseTimer() method', (assert) => {
  const done = assert.async()

  SwalWithoutAnimation({
    timer: 5 * TIMEOUT
  })

  assert.ok(Swal.increaseTimer(4 * TIMEOUT) > 0)

  setTimeout(() => {
    assert.ok(Swal.isVisible())
  }, 7 * TIMEOUT)

  setTimeout(() => {
    assert.notOk(Swal.isVisible())
    done()
  }, 10 * TIMEOUT)
})

