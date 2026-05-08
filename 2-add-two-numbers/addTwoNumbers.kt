
/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        return sumNext(l1, l2)
    }

    fun sumNext(
        l1: ListNode?,
        l2: ListNode?,
        carry: Int = 0,
    ): ListNode? {
        val sum = (l1?.`val` ?: 0) + (l2?.`val` ?: 0) + carry
        // eg. 9, 11

        val carryOver = if (sum > 9) 1 else 0

        val currentNodeVal = sum % 10
        // to co w wezle to 0-9
        // to co przenosimy to 0 - 1 (bo suma liczb 0-9 daje max 18)

        val newNode = ListNode(currentNodeVal)
        newNode.next = if (l1?.next != null || l2?.next != null || carryOver > 0) sumNext(l1?.next, l2?.next, carryOver) else null
        return newNode
    }
}

