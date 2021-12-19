<script lang="ts" setup>
import { useQuery } from "vue-query";

const fetchNearbyFriends = fetch("http://localhost:3004/nearby-friends").then(
  (res) => res.json()
);
const { data: friends, isLoading: friendsIsLoading } = useQuery(
  "nearby-friends",
  () => fetchNearbyFriends
);

const fetchRecentlySplit = fetch("http://localhost:3004/recently-split").then(
  (res) => res.json()
);
const { data: recentFriends, isLoading: recentFriendsIsLoading } = useQuery(
  "recently-split",
  () => fetchRecentlySplit
);
</script>

<template>
  <div class="flex flex-col bg-purple-600 rounded-3xl px-5 py-4 space-y-8">
    <div class="flex gap-4 justify-between">
      <div
        class="
          bg-beige-500
          flex
          items-center
          justify-center
          h-[4.5rem]
          w-[4.5rem]
          rounded-3xl
        "
      >
        <FontAwesomeIcon size="lg" class="text-purple-600" icon="search" />
      </div>

      <div class="flex flex-col space-y-2">
        <div class="flex items-center justify-between font-semibold">
          <span class="text-beige-500">Nearby Friends</span>
          <span class="text-sm">See all</span>
        </div>

        <p v-if="friendsIsLoading">Loading...</p>
        <div v-else class="flex items-center gap-2">
          <div
            v-for="(friend, i) in friends"
            :key="i"
            class="
              space-y-2
              bg-purple-500
              rounded-full
              shadow-xl
              w-14
              h-24
              p-2
              flex flex-col
              items-center
              relative
            "
          >
            <img
              :src="friend.avatar"
              alt="friend-avatar"
              class="h-9 w-9 bg-white rounded-full border-4 border-white"
            />

            <p class="font-medium text-sm truncate w-12 text-center">
              {{ friend.name }}
            </p>

            <div
              class="
                absolute
                -bottom-1.5
                rounded-full
                bg-beige-500
                h-5
                w-5
                flex
                items-center
                justify-center
              "
            >
              <FontAwesomeIcon icon="plus" size="xs" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-2">
      <div class="flex font-semibold text-beige-500">Recently Split</div>

      <p v-if="recentFriendsIsLoading">Loading...</p>
      <div v-else class="flex items-center justify-between gap-2">
        <div
          v-for="(friend, i) in recentFriends"
          :key="i"
          class="space-y-2 flex flex-col items-center"
        >
          <img
            :src="friend.avatar"
            alt="friend-avatar"
            class="
              h-11
              w-11
              shadow-lg
              bg-white
              rounded-full
              border-4 border-white
            "
          />

          <p class="font-medium text-sm truncate text-center">
            {{ friend.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
