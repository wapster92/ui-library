<template>
  <div class="user-panel-wrapper">
    <el-dropdown trigger="click" popper-class="user-panel-dropdown">
      <div class="avatar-wrapper">
        <el-avatar class="user-avatar" :size="32" src="https://empty">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <span class="user-panel-dropdown__name">User Name</span>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item divided>
            <ElIcon>
              <Exit />
            </ElIcon>
            <span>Выход</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import {ElAvatar, ElDropdown, ElDropdownItem, ElIcon, ElDropdownMenu} from 'element-plus'
import Exit from '../../../assets/icons/exit.svg'

</script>

<style scoped lang="scss">
.avatar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.user-card {
  border: none;
}
.user-panel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-avatar {
  cursor: pointer;
}
</style>

<style lang="scss">
.user-panel-dropdown {
  width: 204px;
  .el-dropdown-menu {
    padding: 0;
    &__item {
      &:hover, &:focus {
        svg {
          fill: var(--el-dropdown-menuItem-hover-color);
        }
      }
      svg {
        fill: var(--el-text-color-regular);
      }
      &--divided {
        margin: 0;
      }
    }
  }
  &__name {
    display: flex;
    padding: 15px 20px;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    border-bottom: 1px solid var(--el-border-color-lighter);
  }
}
</style>