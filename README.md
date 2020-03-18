## register.html

ფორმის ელემენტის მარქაფი

```html
<!-- ერორის საჩვენებლად .form__field დივს უნდა დაემატოს კლასი reg-error -->
<div class="form__field">
  <label for="name">კომპანიის დასახელება *</label>
  <input type="text" />
</div>
<!-- ხოლო ერორის ტექსტი უნდა ჩაისვას ამ დივის მომდევნო დივში, რომელსაც აქვს კლასი reg-error__msg -->
<div class="reg-error__msg">ელ.ფოსტა ან პაროლი არასწორია</div>
```

## sign-in.html, recover-account.html

```html
<!-- ერორის საჩვენებლად .sign-in__content დივს უნდა დაემატოს კლასი auth-error -->
<div class="sign-in__content auth-error">
  <div class="sign-in__field">
    <label for="email" class="sign-in__email">ელ. ფოსტა</label>
    <input type="email" name="email" id="email" />

    <!-- დამატებით ერორის ან წარმატების საჩვენებლად ამ სპანს უნდა მიენიჭოს კლასი verified ან error -->
    <span class="verify verified"></span>
  </div>

  <div class="sign-in__field">
    <label for="password" class="sign-in__password">პაროლი</label>
    <input type="password" name="password" id="password" />
    <a href="#" class="sign-in__recovery">აღდგენა</a>
  </div>
</div>
```
